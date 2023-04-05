import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://whereisbrian.org',
  integrations: [sitemap(), tailwind()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});