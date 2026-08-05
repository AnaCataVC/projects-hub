import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://projects.ana-catalina.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/identity-map': {
          target: 'https://identity-map-xi.vercel.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/identity-map/, '')
        }
      }
    }
  }
});
