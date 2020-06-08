// pop: 配列の末尾の要素を削除
const arr = [1, 2, 3];

// 👎 破壊的
arr.pop();
console.log(arr); // [1, 2]

// 👍 非破壊的
const newArr = arr.slice(0, -1);
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 2]
