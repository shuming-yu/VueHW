import { createApp } from 'vue'
// vue-axios參考 : https://www.npmjs.com/package/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue-loading-overlay參考 : https://www.npmjs.com/package/vue-loading-overlay
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)

// use : 安裝插件
app.use(VueAxios, axios)
app.use(router)
// component : 註冊全局組件
app.component('Loading', Loading)
app.mount('#app')
