import { createApp } from 'vue'
// vue-axios參考 : https://www.npmjs.com/package/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue-loading-overlay參考 : https://www.npmjs.com/package/vue-loading-overlay
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// bootstrap-icons參考 : https://icons.getbootstrap.com/
import 'bootstrap-icons/font/bootstrap-icons.css';
// 載入 千分號方法
import { date, currency } from './methods/filters';
import App from './App.vue'
import router from './router'

const app = createApp(App)
// globalProperties參考 : https://v3.cn.vuejs.org/api/application-config.html#globalproperties
// filters 自定義屬性名稱, 前方加入 $ 不會跟區域元件內變數產生衝突
app.config.globalProperties.$filters = {
    date,
    currency,
}
// use : 安裝插件
app.use(VueAxios, axios)
app.use(router)
// component : 註冊全局組件
app.component('Loading', Loading)
app.mount('#app')
