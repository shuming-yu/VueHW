<template>

    <div class="text-end">
        <button class="btn btn-primary" type="button" @click="openModal">
        新增一筆產品
        </button>
    </div>

    <table class="table mt-4">
    <thead>
        <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
            {{ item.origin_price }}
        </td>
        <td class="text-right">
            {{ item.price }}
        </td>
        <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
            <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
    <ProductModal ref="productModal"
                :propProduct="addProduct"
                @confirm-product="confirmProduct"></ProductModal>
    <!-- 口訣:前內後外 -->
    <!-- addProduct透過props傳送, 內層使用ProductModal.vue(props) -> propProduct 進行接收 -->
    
</template>

<script>
import ProductModal from '../components/ProductModal.vue';

export default {

    data() {
        return {
            products: [],   // 產品資訊
            pagination: {}, // 分頁
            addProduct: {}, // 外層product
        }
    },

    components: {   //區域註冊
        ProductModal,
    },

    methods: {
        getProducts() {
            // 取得商品列表api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
            this.$http.get(api) 
                .then((res) => {
                    if(res.data.success){   // 成功時執行
                        // console.log(res.data);
                        this.products = res.data.products;
                        this.pagination = res.data.pagination;
                    }
                })
        },
        openModal() {   // 點選新增產品按鈕時執行
            this.addProduct = {};   // 清空欄位動作
            const productComponent = this.$refs.productModal;
            productComponent.showModal();   // 手動打開動態視窗
        },
        confirmProduct(item) {  // 點選Modal確認按鈕執行
            // console.log(item);  // 可先註解下方程式, 確認參數是否正確傳遞
            this.addProduct = item;
            // 建立商品列表api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%95%86%E5%93%81%E5%BB%BA%E7%AB%8B
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
            const productComponent = this.$refs.productModal;
            
            this.$http.post(api, { data : this.addProduct })
                .then((res) => {
                    console.log(res);
                    productComponent.hideModal();   // 送出後隱藏表單modal
                    this.getProducts(); // 重新取得列表資料
                })
        }
    },

    created() {
        this.getProducts();
    }
}
</script>