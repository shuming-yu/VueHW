<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
    data() {
        return {
            modal: {},
        }
    },
    methods: {
        // bootstrap 方法參考 : https://bootstrap5.hexschool.com/docs/5.1/components/modal/#show
        showModal() {
            this.modal.show();
        },
        hideModal() {
            this.modal.hide();
        }
    },
    // created 不一定取得到ref
    // mounted 畫面才是完全生成狀態
    mounted() {
        // 互動元件Modal參考 : https://bootstrap5.hexschool.com/docs/5.1/components/modal/#via-javascript
        // data定義變數      動元素指向外層ref="modal"
        this.modal = new Modal(this.$refs.modal);
    },
}
</script>