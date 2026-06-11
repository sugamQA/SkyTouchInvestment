import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool') || id.includes('react-spline')) {
              return 'spline-vendor'
            }
            if (id.includes('three') || id.includes('@react-three') || id.includes('@react-three/fiber') || id.includes('@react-three/drei')) {
              return 'three-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'motion-vendor'
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
