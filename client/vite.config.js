import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  test:  {
    environment: 'jsdom'
  },
  globals: true,
  setupFiles: ['./tests-config/setup.js']
});
