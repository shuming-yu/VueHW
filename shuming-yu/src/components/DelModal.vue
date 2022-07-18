<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header text-white bg-danger">
          <h5 class="modal-title">刪除警示!!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="item.title">
          您確定要刪除產品名稱為
          <strong class="text-danger">{{ item.title }}</strong> (刪除後無法復原)
        </div>
        <div class="modal-body" v-else>
          您確定要刪除此筆訂單嗎? (刪除後無法復原)
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('delProdcut')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "../mixins/modalMixins";
// import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {}, // Bootstrap Modal 實體化
    };
  },
  // methods: {
  //     showModal() {
  //         this.modal.show();
  //     },
  //     hideModal() {
  //         this.modal.hide();
  //     },
  // },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // mounted() {
  //     this.modal = new Modal(this.$refs.modal);
  // },

  // 整合相同程式碼
  mixins: [modalMixin],
};
</script>