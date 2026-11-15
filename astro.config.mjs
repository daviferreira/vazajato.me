import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.vazajato.me',
  trailingSlash: 'never',
  integrations: [
    // The list and table fragments under /vistas/ are not pages.
    sitemap({ filter: (page) => !page.includes('/vistas/') }),
  ],
  server: { port: 4000 },
});
