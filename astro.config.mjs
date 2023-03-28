import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://whereisbrian.org',
  integrations: [sitemap()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});