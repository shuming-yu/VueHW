<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- <div class="container-fluid">
      <router-link class="navbar-brand" href="#" to="/userboard"
        >用戶端頁面</router-link
      >
    </div> -->
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" width="30" height="28" class="d-inline-block align-text-top">
      Bootstrap
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
          <router-link class="nav-link active" to="/"
            >首頁</router-link
          >
          <router-link class="nav-link" to="/userboard/cart"
            >商品列表</router-link
          >
          <router-link class="nav-link" to="#"
            >常見問題</router-link
          >
          <router-link class="nav-link" to="/login"
            >後台</router-link
          >
        </div>
      </div>
    </div>
  </nav>

  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    ToastMessages,
  },

  provide() {
    return {
      emitter,
    };
  },

  created() {},
};
</script>