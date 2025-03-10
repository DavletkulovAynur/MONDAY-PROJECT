import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
})

//alias - это псевдонимы для импортов, помогают упростить импорты
//path - это стандартный модуль в Node.js
