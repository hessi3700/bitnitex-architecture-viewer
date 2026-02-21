import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get base path from environment variable or default to repo name
// For GitHub Pages: if repo is "username/repo-name", base should be "/repo-name/"
const getBasePath = () => {
  // Check for explicit base path in env (process.env for config file, import.meta.env for runtime)
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  
  // For production, try to infer from package.json homepage or use default
  if (process.env.NODE_ENV === 'production') {
    // Default for this repo (GitHub Pages: .../bitnitex-architecture-viewer/)
    return '/bitnitex-architecture-viewer/'
  }
  
  // Development uses root path
  return '/'
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Optimize for production (using esbuild which is built-in)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mermaid': ['mermaid'],
          'ui-vendor': ['framer-motion', 'lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  // Preview server for testing production build
  preview: {
    port: 4173,
    host: true
  }
})

