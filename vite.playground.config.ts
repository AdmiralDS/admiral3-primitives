import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const rootPath = resolve(__dirname, 'playground');
const srcPath = resolve(__dirname, 'src');
const entryPath = resolve(srcPath, 'index.ts');

export default defineConfig({
  root: rootPath,
  plugins: [react(), svgr()],
  publicDir: false,
  resolve: {
    alias: {
      '#src': srcPath,
      '@admiral-ds/admiral3-primitives': entryPath,
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist-playground'),
    emptyOutDir: true,
  },
});
