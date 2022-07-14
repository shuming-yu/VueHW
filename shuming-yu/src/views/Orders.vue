<template>

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
          <td class="text-right">{{ $filters.currency(item.total) }}</td>
          <td>
            <span class="text-success" v-if="item.is_paid == true">已付款</span>
            <span class="text-danger" v-else>未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openOrderModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal ref="orderModal"
              :propOrder="tempOrder"
              @confirm-order="confirmOrder"></OrderModal>
</template>

<script>
import OrderModal from "@/components/OrderModal.vue";

export default {

  data() {
    return {
      orders: [], // 訂單資訊
      pagination: {}, // 分頁
      tempOrder: {},  // 外層資料傳送接收
      isNew: false,
    };
  },

  components: {
    OrderModal,
  },

  methods: {
    
    getOrders() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http.get(api).then((res) => {
        // console.log(res.data);
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
      this.tempOrder = item;

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/${ item.id }`;
      this.$http.put(api, { data: this.tempOrder })
          .then((res) =>{
            console.log(res);
          })
    },
  },

  created() {
    this.getOrders();
  },
};
</script>
