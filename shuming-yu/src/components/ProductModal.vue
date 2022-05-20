<template>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
        </h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="row">
            <div class="col-sm-4">
            <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" id="image"
                        placeholder="請輸入圖片連結">
            </div>
            <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control">
            </div>
            <img class="img-fluid" alt="">
            <!-- 延伸技巧，多圖 -->
            <div class="mt-5">
                <div class="mb-3 input-group" >
                <input type="url" class="form-control form-control"
                        placeholder="請輸入連結">
                <button type="button" class="btn btn-outline-danger">
                    移除
                </button>
                </div>
                <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                </button>
                </div>
            </div>
            </div>
            <div class="col-sm-8">
            <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title"
                        placeholder="請輸入標題"
                        v-model="tempProduct.title">
            </div>

            <div class="row gx-2">
                <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <input type="text" class="form-control" id="category"
                        placeholder="請輸入分類"
                        v-model="tempProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <input type="text" class="form-control" id="unit"
                        placeholder="請輸入單位"
                        v-model="tempProduct.unit">
                </div>
            </div>

            <div class="row gx-2">
                <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <input type="number" class="form-control" id="origin_price"
                        placeholder="請輸入原價"
                        v-model="tempProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <input type="number" class="form-control" id="price"
                        placeholder="請輸入售價"
                        v-model="tempProduct.price">
                </div>
            </div>
            <hr>

            <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text" class="form-control" id="description"
                        placeholder="請輸入產品描述"
                        v-model="tempProduct.description"></textarea>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea type="text" class="form-control" id="content"
                        placeholder="請輸入產品說明內容"
                        v-model="tempProduct.content"></textarea>
            </div>
            <div class="mb-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        id="is_enabled"
                        v-model="tempProduct.is_enabled">
                <label class="form-check-label" for="is_enabled">
                    是否啟用
                </label>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
                data-bs-dismiss="modal">取消
        </button>
        <button type="button" class="btn btn-primary"
                @click="$emit('confirm-product', tempProduct)">確認</button>
                            <!-- 事件名稱, tempProduct 向外傳遞 -->
                <!-- emit 觸發外層事件 confirm-product, 再觸發 confirmProduct 函式 -->
                <!-- temProduct 透過參數方式傳到 confirmProduct 函式 item 內 -->
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
            tempProduct: {},    // 外層資料傳送接收
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
    props: {
        propProduct: {  // 內層接收
            type: Object,   // 傳進來型別為 Object
            default() { return {} },    // 若外層無正確傳遞, 預設值回傳空物件
        }
    },
    watch: {
        propProduct() { // 監聽 propProduct 有無變動
            // 單向數據流, 不可直接修改外層資料
            // 將外層傳進來資料 propProduct 寫入內層 temProduct
            this.tempProduct = this.propProduct;
        }
    },
    // created 不一定取得到ref
    // mounted 畫面才是完全生成狀態
    mounted() {
        // 互動元件Modal參考 : https://bootstrap5.hexschool.com/docs/5.1/components/modal/#via-javascript
        // data定義變數      動元素指向外層ref="modal"
        // console.log(this.$refs.modal);
        this.modal = new Modal(this.$refs.modal);
    },
}
</script>