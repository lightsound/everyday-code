// unshift: 配列の先頭に要素を追加
const arr = [1, 2, 3];

// 👎 破壊的
arr.unshift(1);
console.log(arr); // [1, 1, 2, 3]

// 👍 非破壊的
const newArr = [1, ...arr];
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 1, 2, 3]
