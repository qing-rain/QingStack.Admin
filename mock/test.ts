import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: ['tom', 'jerry'],
      }
    },
  },
] as MockMethod[]
