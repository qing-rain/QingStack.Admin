import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        data: {
          token: '@word(50,100)', //@word()是mockjs的语法
          refresh_token: '@word(50,100)', //refrsh_token 是用来重新生成token的
        },
      }
    },
  },
] as MockMethod[]
