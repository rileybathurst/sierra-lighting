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
    const { date, image } = JSON.parse(event.body);

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
