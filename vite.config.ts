import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: '/demo-sign-up/',

  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
