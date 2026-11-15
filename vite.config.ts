import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/welcome-page-homework/',
  plugins: [react()],
  server: { port: 3000 },
})
