const obj = { name: "しまぶー" };
const clone = { ...obj }; // { name: "しまぶー" };
console.log(obj === clone); // false

clone.name = "foo"; // ← そもそもこの式もBAD。後の授業で説明します。
console.log(obj); // { name: "しまぶー" }; ☺️ 安心
