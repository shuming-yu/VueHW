<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
    <!-- 頁面切換 -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Navbar,
    ToastMessages,
  },

  // 外層加入 provide
  // 內層元件補上 inject
  // 讓內層元件都可以使用外層功能
  provide() {
    // 函式結構 - 響應式
    return {
      emitter,
    };
  },

  created() {
    // 得到名為benToken的Cookie : https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)benToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    //console.log(token);

    // axios全域設定, 將token加入進來, 之後每次發送api時會自動夾帶token在header內
    // https://github.com/axios/axios#global-axios-defaults
    this.$http.defaults.headers.common.Authorization = token;

    // 檢查用戶是否仍持續登入api : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      //console.log(res);
      if (!res.data.success) {
        // 失敗時執行
        this.$router.push("/login"); // 登入為失敗狀態時, 轉回到login畫面
        // 測試網址旁將cookie-benToken刪除
      }
    });
  },
};
</script>