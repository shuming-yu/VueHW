<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/userboard/cart">購物車</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>

    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">
          {{ product.origin_price }} 元
        </div>
        <del class="h6" v-if="product.price"
          >原價 {{ product.origin_price }} 元</del
        >
        <div class="h5" v-if="product.price">
          現在只要 {{ product.price }} 元
        </div>
        <hr />
        <button
          type="button"
          class="btn btn-outline-danger"
          :disabled="this.status.loadingItem === this.id"
          @click="addToCart(this.id)"
        >
          <div
            v-if="this.status.loadingItem === this.id"
            class="spinner-border spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}, // 產品資訊
      id: "",
      isLoading: false,
      status: {
        loadingItem: "", // 對應品項 id
      },
    };
  },

  inject: ["emitter"],

  methods: {
    getProduct() {
      // 單一商品細節api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%96%AE%E4%B8%80%E5%95%86%E5%93%81%E7%B4%B0%E7%AF%80
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.product = res.data.product;
        }
        this.isLoading = false;
      });
    },

    addToCart(id) {
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1, // 預設數量為 1
      };
      // 加入購物車api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8A%A0%E5%85%A5%E8%B3%BC%E7%89%A9%E8%BB%8A
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(api, { data: cart }).then((res) => {
        console.log(res);
        if(res.data.success){
          // this.emitter.emit('push-message', {
          //   style: 'success',
          //   title: '新增商品成功',
          // })
          this.$swal({
            icon: 'success',
            title: `將 ${ this.product.title } 加入購物車！`,
          });
        }else{
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '新增商品失敗',
          //   content: res.data.message.join('、'),
          // })
          this.$swal({
            icon: 'error',
            title: '加入購物車失敗！',
          });
        }
        this.status.loadingItem = "";
        this.$router.push("/userboard/cart"); // 加入成功後跳回 cart 頁面
      });
    },
  },

  created() {
    // 對應 /router/index.js
    this.id = this.$route.params.productId; // 動態路由存在 params 參數內, 將 productId 參數取出
    this.getProduct();
  },
};
</script>
