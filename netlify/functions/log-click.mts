// netlify/functions/log-click.js
// import type { Config, Context } from "@netlify/functions";

interface ClickEventBody {
  [key: string]: unknown;
}

interface HandlerResponse {
  statusCode: number;
}

interface HandlerEvent {
  body: string;
  [key: string]: unknown;
}

export const handler = async (
  event: HandlerEvent,
): Promise<HandlerResponse> => {
  const body: ClickEventBody = JSON.parse(event.body);
  console.log("Link clicked:", body); // Shows in Netlify function logs

  // Or forward to a logging service (Datadog, LogTail, etc.)

  return { statusCode: 200 };
};
