import { createApp } from 'vue'
// vue-axios參考 : https://www.npmjs.com/package/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
