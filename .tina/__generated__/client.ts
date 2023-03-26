import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/4c636f01-17b7-4ed4-b9e0-06eda0a338e6/github/main', token: '3bc0cc3ed986e1da43799033e92830c63434461b', queries });
export default client;
  