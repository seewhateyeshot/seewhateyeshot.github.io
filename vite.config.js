import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['269e-82-209-141-23.ngrok-free.app'],
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  },
  closeBundle() {
    execSync('cp dist/index.html dist/404.html');
  }
})
