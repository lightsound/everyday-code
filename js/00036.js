const obj = { name: "しまぶー" };
const clone = { ...obj }; // { name: "しまぶー" };
console.log(obj === clone); // false

// 下記の式は本当はBADです。次回より良い方法を解説します。
clone.name = "foo";
console.log(obj); // { name: "しまぶー" }; ☺️ 安心
