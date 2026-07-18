import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

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
    chunkSizeWarningLimit: 300,
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    reportCompressedSize: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 8192,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'motion-vendor'
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'icons-vendor'
            }
            return 'vendor'
          }
        }
      }
    },
    modulePreload: {
      polyfill: false,
    },
  },
  esbuild: {
    legalComments: 'none',
    drop: ['console', 'debugger'],
  },
})
