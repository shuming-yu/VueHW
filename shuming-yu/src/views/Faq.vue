<template>
  <header class="header" style="background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80); height: 300px">
    <div class="container d-flex justify-content-center align-items-center h-100">
      <div class="row">
        <h1 class="text-white bg-secondary bg-opacity-75 rounded-pill">常見問題</h1>
      </div>
    </div>
  </header>

  <div class="container mt-5">
    <div class="accordion" id="accordionExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            #1 新手想運動，但不太曉得從什麼課程開始，有什麼建議嗎?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            可以先報名體驗課程來參觀體驗。基本上我們的課程除了"進階瑜珈"、"TRX" 會比較不建議新手報名外， 其他課程都會應學員需求而做調整。 如果想要有趣一些的課程來維持運動習慣，可以先嘗試看看有氧課程、多功能訓練課程 :)
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            #2 如果臨時有事情或身體不舒服是可以請假的嗎?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            可以的，透過電話(02-3456-7890)聯繫我們，我們將會替你安排其他課程時間。
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            #3 上課後發現自己不太能適應的話，是否能退課呢?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            基本上是可以的，但會先了解是什麼原因或狀況，從狀況再跟學員討論是否要換到其他老師或其他課程。
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            #4 可以單次入場嗎?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            為了維護購課學員的上課品質，我們目前是不開放單次入場的。
          </div>
        </div>
      </div>

    </div>
  </div>

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <footer class="p-2 border-top bg-light fixed-bottom">
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

