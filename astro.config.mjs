import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
