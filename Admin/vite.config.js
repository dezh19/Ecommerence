import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Keep Vite's dep cache outside OneDrive sync paths to avoid EPERM
  // errors from files being locked mid-sync.
  cacheDir: path.join(os.tmpdir(), 'vite-cache-admin'),
  server: {
    port: 5174,
  },
});
