# CLI 常用指令
Bootstrap 六角學院 : https://bootstrap5.hexschool.com/

通用指令 (Mac, Windows 共用)
Nodejs 版本
node -v

npm 版本
npm -v

安裝cli套件
npm install -g @vue/cli

Vue cli版本
vue -V

## Trouble Shootings

1. Windows 上輸入指令出現「因為這個系統上已停用指令碼執行，所以無法載入...」的問題
- 參考 : https://israynotarray.com/other/20200510/1067127387/

2. npm版本兼容导致的npm ERR! ERESOLVE
- 參考 : https://blog.51cto.com/u_15127660/4530250

## 課程中運用到的指令
建立專案 vue create {{ 專案名稱 }} ->

Manually select features ->	//手動安裝
- Choose Vue version	//Vue安裝版本
- Babel	//ES6.7.8.9版本編譯成可運行JS
- Router
- Vuex	//狀態管理工具(暫不安裝)
- CSS Pre-processors	//CSS 預處理器
- Linter / Formatter	//檢視程式碼品質工具

-> 3.x (Preview)
-> n (預設)
-> Sass/SCSS (with dart-sass)
-> ESLint + Standard config (建議)   or   ESLint + Airbnb config (細節要求高,課程示範)
-> Lint on save	//存檔進行檢視
-> In dedicated config files	//獨立檔案型式
-> N (詢問是否存設定檔案)

Vue CLI 安裝的版本號為 v4，選擇 Sass/SCSS (with node-sass)。
Vue CLI 安裝的版本號為 v5，只能選擇 Sass/SCSS (with dart-sass) 。

運行 Vue 開發環境 npm run serve

編譯 Production 版本 npm run build

## CLI GUI Install -> vue ui

新增 -> 在此新增新專案

gui_demo + 包管理器 : npm + 初始化git倉庫 -> 手動 ->

- Choose Vue version	//Vue安裝版本
- Babel	//ES6.7.8.9版本編譯成可運行JS
- Router
- CSS Pre-processors	//CSS 預處理器
- Linter / Formatter	//檢視程式碼品質工具

-> 3.x (Preview)
-> n (預設)
-> Sass/SCSS (with dart-sass)
-> ESLint + Airbnb config (細節要求高,課程示範)  or  ESLint + Standard config (建議)
-> Lint on save	//存檔進行檢視
-> 新增專案,不保存預設

## 確認 VueHW\shuming-yu

npm run build  ->  產生 dist 檔案  ->  首先可測試開啟 dist 內的 index.html (無資訊,F12跳錯誤),不調整直接push的話, dist 檔案不會上傳到git

shuming-yu(專案名稱) -> .gitignore 檔案將 /dist 刪除後 (dist檔案就可 push 到 git 上)

vue ui  ->  設定  ->  Vue CLI  ->  公開路徑新增 /Vue/shuming-yu(專案名稱)/dist/ -> 保存修改

確認 dist 檔案下 -> index.html 內的檔案路徑更改為 /Vue/shuming-yu/dist/js

後續 GitHub Pages 測試

