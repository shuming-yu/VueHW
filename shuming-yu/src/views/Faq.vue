<template>
  <header class="header" style="background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80); height: 300px">
    <div class="container d-flex justify-content-center align-items-center h-100">
      <div class="row">
        <h1 class="text-white bg-secondary bg-opacity-50 rounded-pill">常見問題</h1>
      </div>
    </div>
  </header>

  <div class="container mt-5">
    <div class="accordion" id="accordionExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            #1 入學前需要進行面試嗎?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            本校以「先到先得」形式收生，申請日期會以幼稚園辨事處收妥及確定完成申請入學手續為準。
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            #2 學校以哪種語言進行教學?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            本校會以英語作主要教學語言。本校亦設有普通話堂予半日課程學生；全日課程學生則另有額外普通話堂。
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            #3 教師的資歷及經驗?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            本校教師為教育局所登記之合資格幼兒教育工作者。教師亦受以英語為主要教學語言之訓練，在以英語授課之幼兒教育工作上擁有多年專業經驗。
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

export default {

};
</script>
