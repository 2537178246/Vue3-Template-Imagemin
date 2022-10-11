import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './utils/rem'
import './index.css'

const app = createApp(App)
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, comp)
}
app
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .mount('#app')
