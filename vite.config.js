import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import historyFallback from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: {
      '^/': historyFallback(),
    },
  },
});
