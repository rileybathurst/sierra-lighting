import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return new Response("Hello, world!");
};

// TODO: test with this off to try get the page to look like a page
/* export const config: Config = {
  path: "/hello",
}; */
