import axios from 'axios'

//登录
export const login = (data: object) => {
  return axios.request({
    url: 'api/login',
    method: 'post',
    data,
  })
}
