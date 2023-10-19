import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "bohzu-knowledge" || "",
  apiKey: process.env.API_KEY || "",
});
