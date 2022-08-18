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
// 引用 bootstrap collapse
import 'bootstrap/js/src/collapse';
// vue-sweetalert2參考 : https://www.npmjs.com/package/vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// VeeValiadation 參考 : https://hackmd.io/FFv0a5cBToOATP7uI5COMQ
// 匯入 vee-validate 主套件 : https://vee-validate.logaretm.com/v4/guide/overview#using-npm
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// 匯入 vee-validate 相關規則 : https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules
import { required, email, min } from '@vee-validate/rules';
// 匯入多國語系的功能 : https://vee-validate.logaretm.com/v4/guide/i18n#using-vee-validatei18n
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue'
import router from './router'

const app = createApp(App)

// globalProperties參考 : https://v3.cn.vuejs.org/api/application-config.html#globalproperties
// filters 自定義屬性名稱, 前方加入 $ 不會跟區域元件內變數產生衝突
app.config.globalProperties.$filters = {
    date,
    currency,
}

// 定義驗證規則
defineRule('required', required)    // 必填
defineRule('email', email)
defineRule('min', min)
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

// swal設定
const options = {
  // confirmButtonColor: '#41b882',
  // cancelButtonColor: '#ff7674',
  showConfirmButton: false,
  timer: 1500,
};

// 註冊 vee-validate 三個全域元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

// use : 安裝插件
app.use(VueAxios, axios)
app.use(router)
app.use(VueSweetalert2, options);
// component : 註冊全局組件
app.component('Loading', Loading)

app.mount('#app')
