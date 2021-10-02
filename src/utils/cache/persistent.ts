import { Memory } from './memory'
import { TOKEN_KEY } from '/@/enums/cacheEnum'
import { toRaw } from 'vue'
interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined
}
type LocalStore = BasicStore
export type BasicKeys = keyof BasicStore
type LocalKeys = keyof LocalStore

const localMemory = new Memory()
export class Persistent {
  static getLocal<T>(key: LocalKeys) {
    return localMemory.get(key)?.value as Nullable<T>
  }
  static setLocal(key: LocalKeys, value: LocalStore[LocalKeys]): void {
    localMemory.set(key, toRaw(value))
  }
}
