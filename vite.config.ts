/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: resolve(__dirname, '.eslintrc-auto-import.json'),
      },
    }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    include: ['tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
