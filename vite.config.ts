import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://FranDev94.github.io/react-ts-rick-and-morty/",
  plugins: [react()]
})
