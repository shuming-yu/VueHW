<template>
  <Loading :active="isLoading"></Loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template  v-for="item in orders" :key="item.id">
        <tr>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td class="text-right">
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} - 數量 : {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ $filters.currency(item.total) }} $</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                      v-model="item.is_paid"
                      @change="confirmOrder(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span class="text-success" v-if="item.is_paid">已付款</span>
                <span class="text-danger" v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openOrderModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm" @click="opendelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal ref="orderModal"
              :propOrder="tempOrder"
              @confirm-order="confirmOrder"></OrderModal>
  <DelModal ref="delModal"
            :item="tempOrder"
            @delProdcut="delOrder"></DelModal>
  <Pagination :pages="pagination"
              @emit-pages="getOrders"></Pagination>
</template>

<script>
import OrderModal from "@/components/OrderModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";

export default {

  data() {
    return {
      orders: [], // 訂單資訊
      pagination: {}, // 分頁
      tempOrder: {},  // 外層資料傳送接收
      isNew: false,
      isLoading: false,
    };
  },

  inject: ["emitter"],

  components: {
    OrderModal,
    DelModal,
    Pagination,
  },

  methods: {
    //取得訂單列表 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E8%A8%82%E5%96%AE%E5%88%97%E8%A1%A8
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${ page }`;
      this.$http.get(api).then((res) => {
        // console.log(res.data);
        this.isLoading = false;
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        console.log(this.orders);
      });
    },
    
    openOrderModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = isNew;
      // console.log(this.isNew, this.tempOrder);

      const openModal = this.$refs.orderModal;
      openModal.showModal();
    },

    confirmOrder(item) {
      const paid = {
        is_paid: item.is_paid,
      };
      //修改訂單 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E4%BF%AE%E6%94%B9%E8%A8%82%E5%96%AE
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${ item.id }`;
      this.$http.put(api, { data: paid })
          .then((res) =>{
            console.log(res);
            if(res.data.success) {
              this.emitter.emit('push-message', {
                style: 'success',
                title: '更新訂單資訊成功',
              })
            }else{
              this.emitter.emit('push-message', {
                style: 'danger',
                title: '更新訂單資訊失敗',
                content: res.data.message.join("、"), // 失敗訊息內容
              })
            }
            this.getOrders();
            const openModal = this.$refs.orderModal;
            openModal.hideModal();
          })
    },

    opendelModal(item) {
      this.tempOrder = { ...item };
      const opendelModal = this.$refs.delModal;
      opendelModal.showModal();
    },
    delOrder() {
      //刪除訂單 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%88%AA%E9%99%A4%E8%A8%82%E5%96%AE
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${ this.tempOrder.id }`;
      this.$http.delete(api)
          .then((res) => {
            console.log(res);
            this.getOrders();
            const opendelModal = this.$refs.delModal;
            opendelModal.hideModal();
          })
    },

  },

  created() {
    this.getOrders();
  },
};
</script>
