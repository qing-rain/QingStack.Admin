import {
  Router,
  RouteComponent,
  createRouter,
  createWebHashHistory,
} from 'vue-router'
// 静态路由
import homeRouter from './modules/home'
import loginRouter from './modules/login'
const constantRoutes: Array<RouteComponent> = [homeRouter, loginRouter]

// 按照路由中meta下的rank等级升序来排序路由
export const ascending = (arr: any[]) => {
  return arr.sort((a: any, b: any) => {
    return a?.meta?.rank - b?.meta?.rank
  })
}

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: ascending(constantRoutes),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  },
})
export default router
