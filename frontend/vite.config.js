import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://green-shop-backend-3fod.onrender.com',
        changeOrigin: true,   // ← fixes the Host header mismatch
        secure: true,         // ← keeps HTTPS verification on (default, but explicit)
      },
      '/images': {
        target: 'https://green-shop-backend-3fod.onrender.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})