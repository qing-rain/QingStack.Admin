import { RouteComponent } from 'vue-router'
const Home = () => import('@/views/home/index.vue')
const homeRouter: RouteComponent = {
  path: '/',
  name: 'home',
  component: Home,
}
export default homeRouter
