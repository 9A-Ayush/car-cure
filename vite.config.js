import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // keep this
  server: {
    port: 3000,
    host: 'localhost',
    open: true
  },
  build: {
    rollupOptions: {
      external: ['react-toastify']
    }
  }
});
