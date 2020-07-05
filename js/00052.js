const nums = [20, 50, 100];
const isNumsOver30 = nums.every((value, index, array) => {
  console.log(value, index, array);
  return value > 30; // 配列の要素が 30 より大きいかテスト
});

// 通らないテストがあるので false になります。
console.log(isNumsOver30); // false

// log の出力
// 20, 0, [20, 50, 100]
// 最初の要素でテストが失敗しているため、
// 反復が中断されていることに注目です。
