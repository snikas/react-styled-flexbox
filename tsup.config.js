import { copyFileSync } from 'node:fs';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm', 'cjs'],
  external: ['react'],
  clean: true,
  // src is plain JS, so the hand-written declarations are copied rather than generated
  onSuccess: async () => {
    copyFileSync('src/index.d.ts', 'dist/index.d.ts');
    copyFileSync('src/index.d.ts', 'dist/index.d.cts');
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.loader = { ...options.loader, '.js': 'jsx' };
  },
});
