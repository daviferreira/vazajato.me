import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.vazajato.me',
  // Accept both /page and /page/ (old links had the slash); canonical URLs
  // and the sitemap stay slash-free.
  trailingSlash: 'ignore',
  integrations: [
    // The list and table fragments under /vistas/ are not pages.
    sitemap({
      filter: (page) => !page.includes('/vistas/'),
      // Match the canonical URLs: no trailing slash except the root.
      serialize: (item) => ({
        ...item,
        url:
          new URL(item.url).pathname === '/'
            ? item.url
            : item.url.replace(/\/$/, ''),
      }),
    }),
  ],
  server: { port: 4000 },
});
