import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        minify: "esbuild",
        sourcemap: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
      server: {
        port: 4000,
        open: true,
      },
})
