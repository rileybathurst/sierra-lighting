// netlify/functions/log-click.js
/// <reference types="node" />
import { createClient } from "@libsql/client";
import type { Config, Context } from "@netlify/functions";

const db = createClient({
  url: "libsql://sierra-lighting-rileybathurst.aws-us-west-2.turso.io",
  authToken: process.env.TURSO_KEY,
});

export default async (req: Request, context: Context) => {
  try {
    const body = await req.text();
    const { date, image } = JSON.parse(body);

    await db.execute({
      sql: `INSERT INTO pinterest (date, image) VALUES (?, ?)`,
      args: [date, image],
    });

    console.log("Pinterest entry logged:", { date, image });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Failed to log Pinterest entry" };
  }
};

/* export const config: Config = {
  path: "/click",
}; */
