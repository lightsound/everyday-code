// push: 配列の末尾に要素を追加
const arr = [1, 2, 3];

// 👎 破壊的
arr.push(1);
console.log(arr); // [1, 2, 3, 1]

// 👍 非破壊的
const newArr = [...arr, 1];
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 1]
