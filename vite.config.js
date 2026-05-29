import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:'./', // important for vercel / static hosting
  plugins: [
    vue(),
    tailwindcss(),
  ],
})