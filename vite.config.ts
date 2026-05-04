import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: change to '/<repo-name>/' if deploying to a project page.
  // The deploy workflow injects this via VITE_BASE; falls back to '/'.
  base: process.env.VITE_BASE ?? '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
