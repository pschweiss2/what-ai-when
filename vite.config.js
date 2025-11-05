import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use root base for Cloudflare Pages (served at root). If you later
  // publish under a subpath, change `base` accordingly (e.g. '/your-repo/').
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});


