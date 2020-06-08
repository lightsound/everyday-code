// shift: 配列の先頭の要素を削除
const arr = [1, 2, 3];

// 👎 破壊的
arr.shift();
console.log(arr); // [2, 3]

// 👍 非破壊的
const newArr = arr.slice(1);
console.log(arr); // [1, 2, 3]
console.log(newArr); // [2, 3]
