/**
 * 条件 (三項) 演算子
 * 条件 ? 条件が truthy のときの処理 : 条件が falsy のときの処理
 */
const beverage = age >= 20 ? "ビール" : "ジュース";

// age が 19 のとき
console.log(beverage); // "ジュース"
// age が 20 のとき
console.log(beverage); // "ビール"
// age が 21 のとき
console.log(beverage); // "ビール"
