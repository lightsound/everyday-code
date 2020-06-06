/**
 * sort() について
 * 配列の要素の順番を変えるメソッドですが、
 * 破壊的なメソッドになっています。
 */
const num = [2, 1, 3];
const newNum = num.sort();
console.log(num); // [1, 2, 3] ← 👎
console.log(newNum); // [1, 2, 3]
