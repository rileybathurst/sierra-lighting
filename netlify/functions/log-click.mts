// netlify/functions/log-click.js
/// <reference types="node" />
import { createClient } from "@libsql/client";
import type { Context } from "@netlify/functions";

const TURSO_URL =
  "libsql://sierra-lighting-rileybathurst.aws-us-west-2.turso.io";

export default async (req: Request, _context: Context) => {
  try {
    const tursoKey = process.env.TURSO_KEY;
    if (!tursoKey) {
      console.error("Missing TURSO_KEY environment variable");
      return new Response(
        JSON.stringify({ ok: false, error: "Server misconfiguration" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        },
      );
    }

    const body = await req.text();
    const { date, image } = JSON.parse(body) as {
      date?: string;
      image?: string;
    };

    if (!date || !image) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        },
      );
    }

    const db = createClient({
      url: TURSO_URL,
      authToken: tursoKey,
    });

    await db.execute({
      sql: `INSERT INTO pinterest (date, image) VALUES (?, ?)`,
      args: [date, image],
    });

    console.log("Pinterest entry logged:", { date, image });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to log Pinterest entry" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
};

/* export const config: Config = {
  path: "/click",
}; */
