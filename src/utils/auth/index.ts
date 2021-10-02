import { Persistent, BasicKeys } from '/@/utils/cache/persistent'
export function getAuthCache<T>(key: BasicKeys) {
  const fn = Persistent.getLocal
  return fn(key) as T
}

export function setAuthCache(key: BasicKeys, value: any) {
  const fn = Persistent.setLocal
  return fn(key, value)
}
