<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Ben 後台</a> -->
      <router-link class="navbar-brand" href="#" to="/dashboard/products"
        >Ben 後台</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#dashboard/products">產品</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">訂單</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">優惠券</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
            </li>
        </ul>
        <span class="navbar-text">
            Navbar text with an inline element
        </span> -->
        <div class="navbar-nav active">
          <router-link class="nav-link" to="/dashboard/products"
            >產品</router-link
          >
          <router-link class="nav-link" to="/dashboard/orders"
            >訂單</router-link
          >
          <router-link class="nav-link" to="/dashboard/coupons"
            >優惠券</router-link
          >

          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </div>

        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/userboard/cart"
            >用戶端產品</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // 登出api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89#%E7%99%BB%E5%87%BA
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
      // 測試點選登出後, 回到login頁面, 原本地端token失效, 無法重新進入遠端伺服器, 需重新取得token才能運作
    },
  },
};
</script>