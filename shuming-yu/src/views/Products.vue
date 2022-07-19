<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
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
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <!-- openModal 函式內 item 帶入上方 v-for 的 item -->
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelproductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal
    ref="productModal"
    :propProduct="addProduct"
    @confirm-product="confirmProduct"
  ></ProductModal>
  <!-- 口訣:前內後外 -->
  <!-- addProduct透過props傳送, 內層使用ProductModal.vue(props) -> propProduct 進行接收 -->

  <DelModal
    ref="delModal"
    :item="addProduct"
    @delProdcut="delProduct"
  ></DelModal>
  <!-- 對應內層 DelModal.vue, delProdcut觸發delProduct事件 -->

  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <!-- 對應內層 Pagination.vue, emit-pages觸發getProducts事件 -->
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
// import { currency } from "../methods/filters";  // 具名匯出:千分號, [main.js方式匯入]

export default {
  data() {
    return {
      products: [], // 全部產品資訊
      pagination: {}, // 分頁
      addProduct: {}, // 外層 product
      isNew: false, // 提供 openModal 判斷
      isLoading: false, // 提供 vue3-loading-overlay
    };
  },

  components: {
    //區域註冊
    ProductModal, // 產品元件
    DelModal, // 刪除元件
    Pagination, // 分頁元件
  },

  inject: ["emitter"],

  methods: {
    // currency,   // 千分號

    getProducts(page = 1) {
      // 預設頁碼第一頁
      // 取得商品列表api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${ page }`;
      this.isLoading = true; // 執行 vue3-loading-overlay
      this.$http.get(api).then((res) => {
        this.isLoading = false; // 成功後關閉 vue3-loading-overlay
        if (res.data.success) {
          // 成功時執行
          console.log(res.data);
          this.products = res.data.products; // 商品資訊
          this.pagination = res.data.pagination; // 分頁資訊
        }
      });
    },

    openModal(isNew, item) {
      // 點選 [新增/編輯] 產品按鈕時執行
      // console.log(isNew, item);   // 判斷true&false, 帶入item資訊
      this.isNew = isNew; // 將狀態存入
      if (isNew) {
        // true
        this.addProduct = {}; // 清空欄位動作
      } else {
        // false
        this.addProduct = { ...item }; // 淺層拷貝
      }

      const productComponent = this.$refs.productModal;
      productComponent.showModal(); // 手動打開動態視窗
    },

    confirmProduct(item) {
      // 點選Modal確認按鈕執行
      // console.log(item);  // 可先註解下方程式, 確認參數是否正確傳遞
      // ProductModal->tempProduct 透過參數方式傳入 item
      this.addProduct = item;

      // 新增
      // 建立商品列表api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%95%86%E5%93%81%E5%BB%BA%E7%AB%8B
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";

      // 編輯
      // 修改商品列表api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E4%BF%AE%E6%94%B9%E7%94%A2%E5%93%81
      if (!this.isNew) {
        // 判斷為 false 執行
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }

      const productComponent = this.$refs.productModal;
      // object[propertyName], propertyName 可以使用變數的方式傳入
      // 參考 : https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties
      this.$http[httpMethod](api, { data: this.addProduct }).then((res) => {
        console.log(res);
        productComponent.hideModal(); // 送出後隱藏表單modal

        if (res.data.success) {
          this.getProducts(); // 重新取得列表資料
          // 自定義事件名稱, (傳送)參數 - 對應 ToastMessages.vue
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功",
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: res.data.message.join("、"), // 失敗訊息內容
          });
        }
      });
    },

    // 點選刪除按鈕 popout
    openDelproductModal(item) {
      // console.log(item);   // 檢查取得資料
      this.addProduct = { ...item };
      const delproductComponent = this.$refs.delModal;
      delproductComponent.showModal();
    },
    // 刪除
    // 刪除產品api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%88%AA%E9%99%A4%E7%94%A2%E5%93%81
    delProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.addProduct.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        const delproductComponent = this.$refs.delModal;
        delproductComponent.hideModal();
        this.getProducts();
      });
    },
  },

  created() {
    this.getProducts();
  },
};
</script>