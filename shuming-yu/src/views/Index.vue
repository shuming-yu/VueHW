<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="" width="30" height="28" class="d-inline-block align-text-top">
      Bootstrap
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <!-- <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul> -->
        <div class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
          <router-link class="nav-link active" to="/dashboard/products"
            >首頁</router-link
          >
          <router-link class="nav-link" to="/userboard/cart"
            >商品列表</router-link
          >
          <router-link class="nav-link" to="#"
            >常見問題</router-link
          >
          <router-link class="nav-link" to="/login"
            >後台</router-link
          >
        </div>
        <!-- <span class="navbar-text">
          Navbar text with an inline element
        </span> -->
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
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1537882111161-c3379a777c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top height-s4 object-fit-cover" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <button type="button" class="btn-primary btn w-100">訂閱</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark py-2 mt-5">
    <div class="container text-white">
      <div class="text-center">Copyright &copy; 2022 All Rights Reserved. Designed by ShuMingYU</div>
    </div>
  </footer>

</template>

<script>


export default {
  data() {
    return {

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
