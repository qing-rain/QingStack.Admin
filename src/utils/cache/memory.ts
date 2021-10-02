export interface Cache<V = any> {
  value?: V
}
export class Memory<T = any, V = any> {
  private cache: { [key in keyof T]?: Cache<V> } = {}
  get<K extends keyof T>(key: K) {
    return this.cache[key]
  }
  set<K extends keyof T>(key: K, value: V) {
    let item = this.get(key)
    item = { value }
    this.cache[key] = item
    return value
  }
}
