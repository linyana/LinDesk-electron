import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,// 端口号    
    open: true,// 自动在浏览器打开    
    https: false,// 是否开启 https
    proxy: {
      '/api': {
        target: 'http://localhost:8080', //node.js服务器运行的地址
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  devServer: {
    https: false,
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  },


})
