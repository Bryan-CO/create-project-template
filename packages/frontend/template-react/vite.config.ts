import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Esto permite que tu app escuche en todas las interfaces de red
    port: 3000,       // Puedes elegir el puerto que desees
    open: true,       // Abre el navegador automáticamente
  },
})
