import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue'],
      dts: 'src/typed-router.d.ts',
    }),
    vue(),
  ],
});
