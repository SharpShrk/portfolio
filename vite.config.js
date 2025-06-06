import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { globSync } from 'glob';
import path from 'path';

const entries = {
  index: './index.html',
  ...Object.fromEntries(
    globSync('./projects/*.html').map(file => [
      path.basename(file, '.html'),
      path.resolve(file)
    ])
  )
};

export default defineConfig({
  plugins: [vue()],
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: entries
    }
  }
});