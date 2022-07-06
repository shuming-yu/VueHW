<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model="gotCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="gotCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="請輸入折扣百分比"
              v-model="gotCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model="gotCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
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
            class="btn btn-primary"
            @click="$emit('confirm-coupon', gotCoupon)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      modal: {},
      gotCoupon: {}, // 外層傳進來資料放置區
      due_date: "",
    };
  },

  props: {
    propCoupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  watch: {
    propCoupon() {
      this.gotCoupon = this.propCoupon; // 內層 gotCoupon 指向外層傳進來的 props -> propCoupon

      // 將時間格式改為 YYYY-MM-DD
      //console.log(this.propCoupon.due_date);
      const dateAndTime = new Date(this.propCoupon.due_date * 1000)
        .toISOString()
        .split("T");
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.gotCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },

  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },

  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>