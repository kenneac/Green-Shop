import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//  https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    //shortcuts for working with url
  server:{
    proxy:{
      '/api':{
        target: "https://green-shop-backend-3fod.onrender.com/"
      },
      '/images':{
        target: "https://green-shop-backend-3fod.onrender.com"
      }
    }
  }
})
