import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router'
//导入状态管理
import { setupStore } from '@/store'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入中文语言包
import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
//挂载store
setupStore(app)
//使用use注册ElementPlus
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#app')
