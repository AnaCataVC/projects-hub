import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://projects.ana-catalina.com',
  // Product landings are canonical on their own subdomains, not on projects-hub
  integrations: [sitemap({ filter: (page) => !page.includes('/p/') })],
  vite: {
    plugins: [tailwindcss()],
  }
});
