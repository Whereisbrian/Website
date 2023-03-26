import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '3bc0cc3ed986e1da43799033e92830c63434461b', queries });
export default client;
  