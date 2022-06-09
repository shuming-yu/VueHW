<template>
    <Loading :active="isLoading"></Loading>
    <table class="table mt-4">
    <thead>
        <tr>
            <th width="200">圖片</th>
            <th width="150">商品名稱</th>
            <th width="120">價格</th>
            <th width="200">功能</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in products" :key="item.id">
            <td style="width: 100px">
                <div style="height: 200px; background-size: cover; background-position: center"
                    :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            </td>
            <td><a href="#" class="text-dark">{{ item.title }}</a></td>
            <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5 " v-if="item.price">現在只要 {{ item.price }} 元!!</div>
            </td>
            <td>
                <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary"
                            @click="getProduct(item.id)">
                            查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger"
                            @click="addToCart(item.id)"
                            :disabled="this.status.loadingItem === item.id">
                        <!-- 參考 spinners 讀取效果 : https://bootstrap5.hexschool.com/docs/5.1/components/spinners/ -->
                        <div v-if="this.status.loadingItem === item.id" class="spinner-grow spinner-grow-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                            加到購物車
                    </button>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    data() {
        return {
            products: [],   // 產品資訊
            isLoading: false,
            status: {
                loadingItem : '',   // 對應品項 id
            }
        }
    },

    methods: {
        getProducts() { // 顯示後台產品
            // 取的商品列表api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            this.isLoading = true;
            this.$http.get(api) 
                .then((res) => {
                    console.log(res.data);
                    this.products = res.data.products;  // 取得資訊丟到 products 陣列內
                    this.isLoading = false;
                })
        },

        getProduct(id) {    // 點選取得產品 id 後送到 product 頁面
            this.$router.push(`/userboard/product/${ id }`);
        },

        addToCart(id) {
            //console.log(id);
            // 加入購物車api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8A%A0%E5%85%A5%E8%B3%BC%E7%89%A9%E8%BB%8A
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.status.loadingItem = id;   // 將取得 id 放入, 後續比對用
            const cart = {
                product_id : id,    // 將取得 id 放入 product_id
                qty : 1,    // 預設數量為 1
            };
            this.$http.post(api, { data: cart })
                .then((res) => {
                    this.status.loadingItem = '';   // 成功後清空
                    console.log(res); // 確認送出是否成功
                })
        }
    },

    created() {
        this.getProducts();
    },
}
</script>
