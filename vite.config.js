import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure assets are properly handled
  publicDir: 'public',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Use esbuild instead of terser (faster and no extra dependency)
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  
  // Base path configuration (important for deployment)
  base: './',
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true
  }
})
