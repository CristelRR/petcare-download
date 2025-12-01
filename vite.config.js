import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// AQUI DEBE IR el nombre EXACTO de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/petcare-download/',
})
