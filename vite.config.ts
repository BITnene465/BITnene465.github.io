import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',   // 用户主页挂在 https://BITnene465.github.io/ 的根
})
