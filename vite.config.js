import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import path from 'path';

export default defineConfig({
    // server:{
    //     proxy:{
    //         '/':{
    //             target:'https://85.8.187.161:3835/',
    //             changeOrigin: true,
    //             secure: false,
    //             auth:'user228562:x6dqz0',
    //             configure: (proxy, options) => {
    //                 const username = 'user228562';
    //                 const password = 'x6dqz0';
    //                 options.auth = `${username}:${password}`;
    //                 proxy.on('error', (err, _req, _res) => {
    //                   console.log('proxy error', err);
    //                 });
    //                 proxy.on('proxyReq', (proxyReq, req, _res) => {
    //                   console.log('Sending Request to the Target:', req.method, req.url);
    //                 });
    //                 proxy.on('proxyRes', (proxyRes, req, _res) => {
    //                   console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
    //                 });
    //               },
    //         }
    //     }
        
    // },
    base: "/",
    plugins: [
      vue(),
      viteBasicSslPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'./src')
        
        }
    },
});
