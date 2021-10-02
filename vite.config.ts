import { defineConfig, ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { loadEnv } from './build/utils'
import { createProxy } from './build/proxy'

import { viteMockServe } from 'vite-plugin-mock'
const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}
const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = loadEnv()
const alias: Record<string, string> = {
  '/@/': pathResolve('src') + '/',
  '/#/': pathResolve('types') + '/',
}
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock', //指定mock目录中的文件全都是mock接口
        localEnabled: mode === 'mock' || command === 'serve', //指定在serve模式下才开启mock服务（可以在package.json中的启动命令中指定mode为serve）
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `, // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        logger: true,
      }),
    ],
    server: {
      // 是否开启 https
      https: false,
      /**
       * 端口号
       * @default 3000
       */
      port: VITE_PORT,
      host: '0.0.0.0',
      // 本地跨域代理
      proxy: createProxy(VITE_PROXY),
    },
    resolve: { alias },
  }
}
