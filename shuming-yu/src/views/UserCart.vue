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
                            >
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
        getProduct(id) {
            this.$router.push(`/userboard/product/${ id }`);
        },
    },

    created() {
        this.getProducts();
    },
}
</script>
