/* eslint-disable @typescript-eslint/no-unsafe-call */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import notifier from 'vite-plugin-notifier';
import solidPlugin from 'vite-plugin-solid';
import { visualizer } from 'rollup-plugin-visualizer';
import checker from 'vite-plugin-checker';

export default defineConfig({
  optimizeDeps: {
    exclude: [
    ],
  },
  plugins: [
    {
      enforce: 'pre',
    },
    solidPlugin(),
    notifier(),
    checker({
      typescript: true,
      eslint: {
        files: ['./src'],
        extensions: ['.ts', '.tsx'],
      },
      enableBuild: false,
    }),
  ],
  build: {
    assetsDir: '_assets',
    sourcemap: process.env.ANALYZE && true,
    rollupOptions: {
      plugins: [
        process.env.ANALYZE && visualizer({
          filename: resolve(__dirname, 'dist/stats.html'),
          template: 'treemap', // sunburst|treemap|network
          sourcemap: true,
        }),
      ],
    },
  },
});
