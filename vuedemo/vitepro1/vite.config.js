import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path"; // 在有关路径设置的时候需要单独引入path模块

// https://vitejs.dev/config/
export default defineConfig({
  css:{},
  esbuild:{},
  // 配置别名
  alias:{
    "@":path.resolve(__dirname,"src"),
    "views": path.resolve(__dirname,"src/views"),
    "components": path.resolve(__dirname,"src/components"),
    "apis": path.resolve(__dirname,"src/apis"),
    "routes": path.resolve(__dirname,"src/routes")
  },
  plugins: [vue()]
})
