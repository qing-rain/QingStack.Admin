declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>
  namespace JSX {}
}
export {}
