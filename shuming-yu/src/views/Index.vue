<template>
  <Loading :active="isLoading"></Loading>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
      <img src="../img/logo.jpg" alt="" width="30" height="28" class="d-inline-block align-text-top">
      台灣基督教青年協會
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
          <router-link class="nav-link" to="/"
            >首頁</router-link
          >
          <router-link class="nav-link" to="/userboard/cart"
            >商品列表</router-link
          >
          <router-link class="nav-link" to="/userboard/faq"
            >常見問題</router-link
          >
          <router-link class="nav-link" to="/login"
            >後台</router-link
          >
        </div>
      </div>
    </div>
  </nav>

  <header class="header" style="background-image: url(https://images.unsplash.com/photo-1632919437809-30b200530cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)">
    <div class="container d-flex align-items-center h-100">
      <div class="row">
        <h1 class="text-white">YMCA<br>台灣基督教青年協會</h1>
        <button class="btn btn-primary btn-lg col-md-5 offset-md-2">訂閱</button>
      </div>
    </div>
  </header>

  <section class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <img class="height-s5 w-100 object-fit-cover" src="@/img/ymca1.jpg" alt="">
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
        <h2>YMCA會徽意義</h2>
        <p>YMCA強調的全人健康(WELLNESS)的內涵，即YMCA三角徽章所強調的身(BODY)、心(MIND)和靈(SPIRIT)－ 全方位的健康，在台北YMCA透過會館的體育設施、體適能運動、各項室內外活動(AQUA SPORTS，CAMPING，OUTING…etc.)，系列的健康講座、水中、陸地的復健活動等等，逐漸帶入品格教育－關懷 (CARING)、誠信(HONESTY)、尊重(RESPECT)及負責(RESPONSIBILITY)，也藉著許多國際性活動、宗教性活動以及弱勢 關懷的參與，把體育事工又帶入生命的體驗和靈性的提昇。</p>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-4 flex-row-reverse">
      <div class="col-md-5">
        <img class="height-s5 w-100 object-fit-cover" src="@/img/ymca2.jpg" alt="">
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <div>
        <h2>品格培育</h2>
        <p>YMCA強調的全人健康(WELLNESS)的內涵，即YMCA三角徽章所強調的身(BODY)、心(MIND)和靈(SPIRIT)－ 全方位的健康，在台北YMCA透過會館的體育設施、體適能運動、各項室內外活動(AQUA SPORTS，CAMPING，OUTING…etc.)，系列的健康講座、水中、陸地的復健活動等等，逐漸帶入品格教育－關懷 (CARING)、誠信(HONESTY)、尊重(RESPECT)及負責(RESPONSIBILITY)，也藉著許多國際性活動、宗教性活動以及弱勢 關懷的參與，把體育事工又帶入生命的體驗和靈性的提昇。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 mt-5" style="background-image: url(https://images.unsplash.com/22/brick-wall.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <img src="@/img/swim.jpg" style="width: 400px" class="img-fluid" alt="">
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div>
          <p class="text-white">YMCA ( Young Men's Christian Association ) 亦即基督教青年會，西元1844年創立於英國倫敦，而後再逐漸擴展至全世界各地。一百七十多年來，YMCA一直本著基督服務的精神，透過教育、文化、技藝、體育、露營、社團服務等有關事工的推行，培養青少年德、智、體、群、美之均衡發展；同時透過世界各地青年的交流活動，擴展國際友誼的領域，以促進世界人類的和平。</p>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="row mt-4 g-4">
      <h2 class="mb-3 d-flex justify-content-center">會館及服務資訊</h2>
      <div class="col-md-4">
        <div class="card">
          <img src="https://www.ymcahotel.tw/archive/hotel/303/vr_1759_.JPG" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">台北青年國際旅館 Y Hotel Taipei</h5>
            <p class="card-text">位於台北市交通重要樞紐的台北車站附近，為商業、娛樂、購物及人文薈萃的精華區。我們秉持YMCA創立的初衷，提供平價、溫馨、清潔與安全的居住環境。</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">100台北市許昌街19號</li>
            <li class="list-group-item">Tel：(02)2311-3201</li>
            <li class="list-group-item"><a href="http://www.ymcataipei.org.tw/">http://www.ymcataipei.org.tw/</a></li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://www.ymca-taipei.org.tw/WEB//_imagecache/P=MW800,MH800,F,BFFFFFF/_Y%E6%9C%83%E9%A4%A8_11%E6%96%B0%E4%BA%94%E6%B3%B0%E5%9C%8B%E6%B0%91%E9%81%8B%E5%8B%95%E4%B8%AD%E5%BF%83.jpg" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">新北市泰山國民運動中心 New Taipe Taishan Civil Sports Center</h5>
            <p class="card-text">台北YMCA專業游泳教學</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">243新北市泰山區全興路167號</li>
            <li class="list-group-item">Tel：(02)2296-8860</li>
            <li class="list-group-item"><a href="http://www.xwtsc.com/">http://www.xwtsc.com/</a></li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://www.ymca-taipei.org.tw/WEB//_imagecache/P=MW800,MH800,F,BFFFFFF/_Y%E6%9C%83%E9%A4%A8_12%E7%A6%8F%E9%9A%86%E7%87%9F%E5%9C%B04.jpg" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">福隆營地 Fu-Long Campsite</h5>
            <p class="card-text">YMCA福隆營地位於福隆海水浴場旁，鐵公路交通方便。適合兩天一夜活動安排，歡迎公司團體或教會團契來此聯誼訓練。</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">228新北市貢寮區福隆村福隆街54號</li>
            <li class="list-group-item">Tel：(02)2822-7070</li>
            <li class="list-group-item"><a href="http://qilian.ymca.org.tw/02about_5.html">http://qilian.ymca.org.tw/02about_5.html</a></li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
    </div>
  </section>

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <footer class="mt-4 p-2 border-top bg-light">
    <div class="container align-items-center justify-content-between d-flex">
      <p class="mb-0 text-muted">
        Copyright &copy; 2022 All Rights Reserved. Designed by ShuMingYU
      </p>
      <ul class="nav social">
        <li class="nav-item">
          <a href="https://github.com/shuming-yu" class="nav-link text-muted"> <i class="fa fa-github fa-2x"></i> </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-muted"> <i class="fa fa-facebook fa-2x"></i> </a>
        </li>
      </ul>
    </div>
  </footer>

</template>

<script>


export default {
  data() {
    return {
      isLoading: false,
    };
  },

  components: {
    
  },

  methods: {

  },
  mounted() {

  },
};
</script>
