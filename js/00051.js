const nums = [20, 50, 100];
const isNumsOver10 = nums.every((value, index, array) => {
  console.log(value, index, array);
  return value > 10; // 配列の要素が 10 より大きいかテスト
});

// テストがすべて通ると true
console.log(isNumsOver10); // true

// log の出力
// 20, 0, [20, 50, 100]
// 50, 1, [20, 50, 100]
// 100, 2, [20, 50, 100]
