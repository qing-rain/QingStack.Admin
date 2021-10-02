import { TOKEN_KEY } from '/@/enums/cacheEnum'
import { defineStore } from 'pinia'
import { store } from '/@/store'
import { getAuthCache, setAuthCache } from '/@/utils/auth'

interface UserState {
  token?: string
}
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // token
    token: undefined,
  }),
  getters: {
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY)
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : '' // for null or undefined value
      setAuthCache(TOKEN_KEY, info)
    },
    resetState() {
      this.token = ''
    },
  },
})
// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
