<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ 'disabled': pages.current_page === 1 }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <!-- 從資料庫傳回頁碼相同, 加入 active 效果 -->
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ 'disabled': pages.current_page === pages.total_pages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// 分頁模板 :  https://github.com/hexschool/vue3-course-api-wiki/wiki/%E8%AA%B2%E7%A8%8B%E9%83%A8%E5%88%86%E6%A8%A1%E6%9D%BF#%E5%8A%A0%E5%85%A5%E5%88%86%E9%A0%81%E5%88%87%E6%8F%9B
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ["pages"],

  methods: {
    updatePage(page) {
      // page = 頁碼
      this.$emit("emit-pages", page);
    },
  },
};
</script>