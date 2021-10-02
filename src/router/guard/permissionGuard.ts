import type { Router } from 'vue-router'

import { PageEnum } from '/@/enums/pageEnum'
import { useUserStoreWithOut } from '/@/store/modules/user'

const LOGIN_PATH = PageEnum.BASE_LOGIN
const whitePathList: PageEnum[] = [LOGIN_PATH]

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut()
  router.beforeEach((to, from, next) => {
    const token = userStore.getToken
    // Whitelist can be directly entered
    if (whitePathList.includes(to.path as PageEnum)) {
      next()
      return
    }
    if (!token) {
      // redirect login page
      const redirectData: {
        path: string
        replace: boolean
        query?: Recordable<string>
      } = { path: LOGIN_PATH, replace: true }
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        }
      }
      next(redirectData)
      return
    }
  })
}
