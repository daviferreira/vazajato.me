import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.vazajato.me',
  trailingSlash: 'never',
  integrations: [sitemap()],
  server: { port: 4000 },
});
