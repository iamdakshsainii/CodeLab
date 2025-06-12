import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // ✅ Works now
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [react(), tailwindcss()],
  }
})
