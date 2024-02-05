import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kca2250log",
  apiKey: process.env.API_KEY as string,
});
