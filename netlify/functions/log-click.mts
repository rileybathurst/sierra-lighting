// netlify/functions/log-click.js
/// <reference types="node" />
import { createClient } from "@libsql/client";

const db = createClient({
  url: "libsql://sierra-lighting-rileybathurst.aws-us-west-2.turso.io",
  authToken: process.env.TURSO_KEY,
});

interface HandlerResponse {
  statusCode: number;
  body?: string;
}

interface HandlerEvent {
  body: string;
  headers: {
    "user-agent"?: string;
    [key: string]: unknown;
  };
  httpMethod?: string;
  [key: string]: unknown;
}

export const handler = async (
  event: HandlerEvent,
): Promise<HandlerResponse> => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { link, page } = JSON.parse(event.body);

    await db.execute({
      sql: `INSERT INTO click_events (link, page, user_agent) VALUES (?, ?, ?)`,
      args: [link, page, event.headers["user-agent"] ?? null],
    });

    console.log("Link clicked:", { link, page });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Failed to log click" };
  }
};
