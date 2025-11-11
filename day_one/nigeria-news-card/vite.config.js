import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import App from './src/App'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
