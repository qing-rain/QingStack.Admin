import { RouteComponent } from 'vue-router'
const Login = () => import('@/views/login/index.vue')
const loginRouter: RouteComponent = {
  path: '/login',
  name: 'login',
  component: Login,
}
export default loginRouter
