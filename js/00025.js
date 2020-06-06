/**
 * 破壊的メソッドを非破壊的に使いたい場合、
 * スプレッド構文と組み合わせて実現します。
 * トリッキーですが実践でもよく使われます。
 */
// sort() メソッドを非破壊的に使う
const num = [2, 1, 3];
const newNum = [...num].sort();
console.log(num); // [2, 1, 3] ← 👍
console.log(newNum); // [1, 2, 3]

// POINT [...num] で一度新しい配列を生成している
console.log(num); // [2, 1, 3]
console.log([...num]); // [2, 1, 3] ← 値は同じだが元の配列とは違う
