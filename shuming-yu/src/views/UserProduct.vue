<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">

        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/userboard/cart">購物車</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
        </nav>

        <div class="row justify-content-center">
        <article class="col-8">
            <h2>{{ product.title }}</h2>
            <div>{{ product.content }}</div>
            <div>{{ product.description }}</div>
            <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
        </article>
        <div class="col-4">
            <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
            <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
            <hr>
            <button type="button" class="btn btn-outline-danger"
                    @click="addToCart(product.id)">
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
            product: {},    // 產品資訊
            id: '',
            isLoading: false,
        }
    },
    methods: {
        getProduct() {
            // 單一商品細節api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%96%AE%E4%B8%80%E5%95%86%E5%93%81%E7%B4%B0%E7%AF%80
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${ this.id }`;
            this.isLoading = true;
            this.$http.get(api)
                .then((res) => {
                    console.log(res);
                    if (res.data.success) {
                        this.product = res.data.product;    
                    };
                        this.isLoading = false;
                })
        },
    },
    created() {
        this.id = this.$route.params.productId; // 動態路由存在 params 參數內, 將 productId 參數取出
        this.getProduct();
    },
}
// export default {
//     data() {
//         return {
//             product: {},
//             id: '',
//         };
//     },

//     methods: {
//         getProduct() {
//         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
//         this.isLoading = true;
//         this.$http.get(api)
//             .then((response) => {
//                 console.log(response.data);
//                 this.isLoading = false;
//                 if (response.data.success) {
//                 this.product = response.data.product;
//                 }
//             });
//         },

//         addToCart(id, qty = 1) {
//             const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
//             const cart = {
//                 product_id: id,
//                 qty,
//             };
//             this.isLoading = true;
//             this.$http.post(url, { data: cart }).then((response) => {
//                 this.isLoading = false;
//                 this.$httpMessageState(response, '加入購物車');
//                 this.$router.push('/user/cart');
//             });
//         },
//     },

//     created() {
//         this.id = this.$route.params.productId;
//         this.getProduct();
//     },
// };
</script>
