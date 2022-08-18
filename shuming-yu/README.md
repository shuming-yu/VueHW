# shuming-yu

## 相關課程資源

### Bootstrap

- Bootstrap : https://getbootstrap.com/
- Bootstrap 六角學院 : https://bootstrap5.hexschool.com/

### Material Design

- Material Design : https://material.io/design
- 六角翻譯版 : https://material-design.hexschool.io/

### 素材資源

- 圖庫 : https://unsplash.com/
- Material Design Icon : https://fonts.google.com/icons
- Bootstrap Icon : https://icons.getbootstrap.com/#icons
- FontAwesome : https://fontawesome.com/
- 付費 icon : https://www.flaticon.com/
- 字體（無襯線 san-serif、黑體）: https://www.google.com/get/noto/

## 課程需要安裝套件

1. Vue-axios : https://www.npmjs.com/package/vue-axios

2. Vue3-loading-overlay : https://www.npmjs.com/package/vue-loading-overlay

3. mitt : https://www.npmjs.com/package/mitt

4. Bootstrap Icons : https://icons.getbootstrap.com/

5. vee-validate : https://vee-validate.logaretm.com/v4/guide/overview#using-npm

6. vee-validate/rules : https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules

7. vee-validate/i18n : https://vee-validate.logaretm.com/v4/guide/i18n#using-vee-validatei18n

8. vue-sweetalert2 : https://www.npmjs.com/package/vue-sweetalert2

9. sweetalert2 : https://sweetalert2.github.io/#examples

## 課程 API 文件及相關資源

1. 課程需要先註冊屬於個人的 API 路徑，註冊方法在下一小節會介紹，而註冊網址與 API 站點都是以下連結：
註冊 -> 登入帳號 -> 申請API路徑 shuming-api -> 測試API
- https://vue3-course-api.hexschool.io/

2. API 文件：右方 Wiki 首頁下方選項
- https://github.com/hexschool/vue3-course-api-wiki/wiki

3. 課程中後期，不會所有步驟都一一說明，所以課程中有提供每個階段的 commit，讓大家可以看到每個章節老師修改了哪些部分：
所有課程進度 Commit (對應課程章節)：
- https://github.com/hexschool/vue3-course-api-wiki/wiki/%E9%80%B2%E5%BA%A6-Commit

4. 課程中也會提供許多 HTML 片段模板，減少重複繁瑣的行為，如提到會提供模板的部分，可在以下連結查找：
- https://github.com/hexschool/vue3-course-api-wiki/wiki/%E8%AA%B2%E7%A8%8B%E9%83%A8%E5%88%86%E6%A8%A1%E6%9D%BF

5. 雖然課程中 ESLint 選擇為 Airbnb 格式：
- 體驗簡單一點的開發規則可選擇 Standard
- 對 ES6 及錯誤排除有一定掌握者可選擇 Airbnb
關於 ESLint 搭配 VSCode 的自動排版可參考（注意，並非所有錯誤都可自動排除）：
- https://wcc723.github.io/development/2021/04/11/vscode-eslint-prettier/

使用時 ESLint 時：
- 可多利用文字編輯器的提示來除錯（除錯也是開發者必學的技能之一）
- 盡可能避免關閉 ESLint 的提示

6. VeeValiadation 參考 : https://hackmd.io/FFv0a5cBToOATP7uI5COMQ

## Cookie 存取的語法

1. MDN 文件，將 Cookie 存入、取出：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
附上範例程式碼：

- const token = response.data.token;
- const expired = response.data.expired;
- console.log(token, expired);
- document.cookie = `hexToken=${token};expires=${new Date(expired)};`;

2. Axios 文件，設定預設 Headers：https://github.com/axios/axios#global-axios-defaults
附上範例程式碼：

- const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
- this.$http.defaults.headers.common.Authorization = `${token}`;

