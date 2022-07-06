import Modal from 'bootstrap/js/dist/modal';

export default {
  methods: {
    // bootstrap 方法參考 : https://bootstrap5.hexschool.com/docs/5.1/components/modal/#show
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    // 互動元件Modal參考 : https://bootstrap5.hexschool.com/docs/5.1/components/modal/#via-javascript
    // data定義變數      動元素指向外層ref="modal"
    this.modal = new Modal(this.$refs.modal);
  },
}