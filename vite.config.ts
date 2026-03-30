import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const srcPath = resolve(__dirname, 'src');
const entryPath = resolve(srcPath, 'index.ts');

export default defineConfig({
  plugins: [react(), svgr()],
  publicDir: false,
  resolve: {
    alias: {
      '#src': srcPath,
      '@admiral-ds/admiral3-primitives': entryPath,
    },
  },
  build: {
    lib: {
      entry: entryPath,
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
    },
  },
});
