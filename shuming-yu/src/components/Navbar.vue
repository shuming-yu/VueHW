<template>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
            </li>
        </ul>
        <span class="navbar-text">
            Navbar text with an inline element
        </span>
        </div>
    </div>
    </nav>

</template>

<script>
export default {

    methods: {
        logout() {
            // 登出api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89#%E7%99%BB%E5%87%BA
            const api = `${process.env.VUE_APP_API}logout`;
            this.$http.post(api)
                .then((res)=>{
                    if(res.data.success){   
                        this.$router.push('/login');    
                    }
                })
            // 測試點選登出後, 回到login頁面, 原本地端token失效, 無法重新進入遠端伺服器, 需重新取得token才能運作
        }
    }
}
</script>