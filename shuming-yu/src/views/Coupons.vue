<template>
    <Loading :active="isLoading"></Loading>
    <div class="text-end">
        <button class="btn btn-primary" type="button"
                @click="openCouponModal">
        建立新的優惠券
        </button>
    </div>

    <table class="table mt-4">
        <thead>
            <tr>
                <th>名稱</th>
                <th>折扣百分比</th>
                <th>到期日</th>
                <th>是否付款</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key) in coupons" :key="'item' + key">
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}</td>
                <td class="text-right">
                    {{ $filters.date(item.due_date) }}
                    <!-- 引用 filter.js 內的函式 date -->
                </td>
                <td>
                    <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
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
    
    <CouponModal ref="couponModal"
                :propCoupon="tempCoupon"
                @confirm-coupon="confirmCoupon"></CouponModal>

</template>

<script>
import CouponModal from "../components/CouponModal.vue";

export default {
    data() {
        return {
            coupons: [],    // 優惠券資訊
            pagination: {}, // 分頁
            tempCoupon: {
                title: '',  // 標題
                is_enabled: 0,  // 是否啟用
                percent: 100,   // 折扣百分比,預設 100
                code: '',   // 優惠碼
            },
            isNew: false,
            isLoading: false,
        };
    },

    components: {
        CouponModal,
    },

    methods: {
        getCoupons() {
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
            this.$http.get(api)
                .then((res) => {
                    console.log(res.data.coupons);
                    this.coupons = res.data.coupons;
                    this.isLoading = false;
                })
        },

        openCouponModal() {
            this.tempCoupon = {
                due_date: new Date().getTime() / 1000,
            };
            const CouponModal = this.$refs.couponModal;
            CouponModal.showModal();
        },

        confirmCoupon(item) {
            // CouponModal-> gotCoupon 透過參數方式傳入 item
            //console.log(item);
            this.tempCoupon = item;
            const CouponModal = this.$refs.couponModal;
            // 新增優惠券 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E6%96%B0%E5%A2%9E%E5%84%AA%E6%83%A0%E5%88%B8
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
            this.$http.post(url, { data: this.tempCoupon })
                .then((res) =>{
                    console.log(res);
                    this.getCoupons();  // 重新取得優惠券資訊
                    CouponModal.hideModal();
                })
        },
    },

    created() {
        this.getCoupons();
    },
}
</script>
