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
        <tr >
        <td>Time</td>
        <td>email</td>
        <td class="text-right">
            200
        </td>
        <td class="text-right">
            100
        </td>
        <td>
            <span class="text-success">啟用</span>
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
</template>

<script>
export default {
    data() {
        return {
            orders: [], // 訂單資訊
            pagination: {}, // 分頁
        }
    },
    methods: {
        getOrders() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
            this.$http.get(api)
                .then((res) => {
                    //console.log(res.data);
                    this.orders = res.data.orders;  
                    this.pagination = res.data.pagination;  
                })
        },
    },
    created() {
        this.getOrders();
    },
}
</script>
