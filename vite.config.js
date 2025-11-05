import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/what-ai-when/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});


