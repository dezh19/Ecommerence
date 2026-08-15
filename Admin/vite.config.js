import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';
import path from 'path';

export default defineConfig(({ command }) => ({
  // In production this build is deployed under /admin/ on the same
  // domain as the storefront, so asset URLs need that base path.
  // Dev server still serves from the root for local `npm run dev`.
  base: command === 'build' ? '/admin/' : '/',
  plugins: [react()],
  // Keep Vite's dep cache outside OneDrive sync paths to avoid EPERM
  // errors from files being locked mid-sync.
  cacheDir: path.join(os.tmpdir(), 'vite-cache-admin'),
  server: {
    port: 5174,
  },
}));
