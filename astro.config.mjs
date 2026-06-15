import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
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
