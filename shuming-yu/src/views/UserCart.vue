<template>
    <Loading :active="isLoading"></Loading>
    <div class="row mt-4">

        <!-- 商品列表 -->
        <div class="col-md-7">
            <table class="table align-middle">
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
                                        :disabled="status.loadingItem === item.id">
                                    <!-- 參考 spinners 讀取效果 : https://bootstrap5.hexschool.com/docs/5.1/components/spinners/ -->
                                    <div v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                        加到購物車
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 商品列表END -->

        <!-- 購物車列表 -->
        <div class="col-md-5">
            <div class="sticky-top">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th></th>
                        <th>品名</th>
                        <th style="width: 110px">數量</th>
                        <th>單價</th>
                    </tr>
                </thead>
                <tbody>
                <template v-if="cart.carts">    <!-- 判斷陣列存在 -->
                    <tr v-for="item in cart.carts" :key="item.id">
                        <td>
                            <button type="button" class="btn btn-outline-danger btn-sm"
                                    :disabled="status.loadingItem === item.id"
                                    @click="removeCartItem(item.id)">
                                <i class="bi bi-trash3"></i>
                            </button>
                        </td>
                        <td>
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                            </div>
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <!-- min 設定輸入最小為 1 -->
                                <input type="number" class="form-control"
                                    min="1"
                                    :disabled="item.id === status.loadingItem"
                                    @change="updateCart(item)"
                                    v-model.number="item.qty">
                                <div class="input-group-text">/ {{ item.product.unit }}</div>
                            </div>
                        </td>
                        <td class="text-end">
                            <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                            {{ $filters.currency(item.final_total) }}
                        </td>
                    </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td class="text-end">{{ $filters.currency(cart.total) }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-end text-success">折扣價</td>
                    <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
                </tr>
                </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                        套用優惠碼
                    </button>
                </div>
            </div>
            </div>
        </div>
        <!-- 購物車列表END -->
    </div>

</template>

<script>
export default {
    data() {
        return {
            products: [],   // 產品資訊
            isLoading: false,   // 預設 false - 關閉功能
            status: {
                loadingItem : '',   // 對應品項 id
            },
            cart: {},   // 購物車列表資訊
            coupon_code: '',    // 優惠碼
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
            this.isLoading = true;
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
                    this.isLoading = false;
                    this.status.loadingItem = '';   // 成功後清空
                    console.log(res); // 確認送出是否成功
                })
        },

        getCart() {
            this.isLoading = true;
            // 取得購物車列表api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E8%B3%BC%E7%89%A9%E8%BB%8A%E5%88%97%E8%A1%A8
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.get(api)
                .then((res) => {
                    this.isLoading = false;
                    console.log(res.data.data.carts);
                    this.cart = res.data.data;
                })
        },

        updateCart(item) {
            this.status.loadingItem = item.id;
            // 更新購物車api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E6%9B%B4%E6%96%B0%E8%B3%BC%E7%89%A9%E8%BB%8A
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            const cart = {                      // id - 單一品項 id
                product_id: item.product_id,    // product_id - 產品 id
                qty: item.qty,  // 更新後數量
            };
            this.$http.put(api, { data: cart })
                .then((res) => {
                    // console.log(res);
                    this.status.loadingItem = '';   // 觸發 disable 動作(使用者無法狂點)
                    this.getCart(); // 重整購物車列表
                })
        }
    },

    created() {
        this.getProducts(); // 顯示產品
        this.getCart(); // 顯示購物車列表
    },
}
</script>
