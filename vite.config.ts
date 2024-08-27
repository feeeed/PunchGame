import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PunchGame/",
  plugins: [vue()],
  resolve:{
    alias:{
     
    }

  },
})
