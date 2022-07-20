<template>
  <div id="wrapper">
    <div class="loginbox container mt-5">
      <form class="form" @submit.prevent="signIn">
        <!-- <div class="col-md-6"> -->
        <h2 class="mb-3" style="text-align: center">後台管理系統</h2>
        <div class="group mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="yu.shuming0829@gmail.com"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="group mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="1qaz@WSX"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end btn-group mt-4">
          <button class="btn btn-lg btn-block" type="submit">
            登入
          </button>
          <button class="btn btn-lg btn-block disabled" type="submit">
            註冊
          </button>
        </div>
        <!-- </div> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      // 登入api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
      const api = `${process.env.VUE_APP_API}admin/signin`;
      //console.log(api);

      //             api路徑, 傳送資料
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          // 成功時執行

          // Cookie 存取的語法參考 : https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
          const { token, expired } = res.data;
          console.log("token:", token, "expired:", expired);
          document.cookie = `benToken=${token}; expires=${new Date(expired)}`;
          // 測試 yu.shuming0829@gmail.com , 1qaz@WSX
          // 送出後檢查,點選網址旁[驚嘆號]內Cookie -> benToken(名稱可自取)
          // console.log(res);

          this.$router.push("/dashboard/products"); // 登入為成功狀態時, 轉到dashboard畫面
        }
      });
    },
  },
};
</script>

<style scoped lang="css" src="@/assets/css/login.css"></style>