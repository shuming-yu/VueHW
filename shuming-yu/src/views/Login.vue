<template>
    <div class="container mt-5">
	<form class="row justify-content-center" @submit.prevent="signIn">
        <div class="col-md-6">
            <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
            <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
            />
            </div>
            <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
            />
            </div>
        
            <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            user: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        signIn() {
            // 登入api參考 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
            const api = `${process.env.VUE_APP_API}admin/signin`;
            //console.log(api);
            
            //             api路徑, 傳送資料
            this.$http.post(api, this.user)
                .then((res) => {
                    if(res.data.success){   // 成功時執行

                        // Cookie 存取的語法參考 : https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
                        const { token, expired } = res.data;
                        console.log('token:', token, 'expired:', expired);
                        document.cookie = `benToken=${token}; expires=${new Date(expired)}`;
                        // 測試 yu.shuming0829@gmail.com , 1qaz@WSX 
                        // 送出後檢查,點選網址旁[驚嘆號]內Cookie -> benToken(名稱可自取)
                        console.log(res);

                        this.$router.push('/dashboard');    // 登入為成功狀態時, 轉到dashboard畫面
                    }
                })
        }
    },
}
</script>