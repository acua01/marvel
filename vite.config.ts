/// <reference types="vitest"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://acua01.github.io/marvel',
  test: {
    environment: 'jsdom',
    setupFiles: './src/frameworks/__tests__/setup.ts',
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
    },
  },
});
