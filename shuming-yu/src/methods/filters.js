// 全域的千分號方法 : https://github.com/hexschool/vue3-course-api-wiki/wiki/%E8%AA%B2%E7%A8%8B%E9%83%A8%E5%88%86%E6%A8%A1%E6%9D%BF#%E5%85%A8%E5%9F%9F%E7%9A%84%E5%8D%83%E5%88%86%E8%99%9F%E6%96%B9%E6%B3%95

export function currency(num) { // 千分號
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {    // unix timestamp 轉換一般時間格式
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

