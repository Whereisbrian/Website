import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://whereisbrian.org',
  integrations: [sitemap(), tailwind(), partytown()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});