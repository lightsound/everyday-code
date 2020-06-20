// 🙅 const で宣言したものを書き換えないで
const obj1 = { name: "しまぶー", univ: "IT大学" };
obj1.name = "foo";
console.log(obj1); // { name: "foo", univ: "IT大学" }; 😱

// 🙆 新たにコピーして宣言しなおそう
const obj2 = { name: "しまぶー", univ: "IT大学" };
const clone = { ...obj2, name: "foo" };
console.log(obj2); // { name: "しまぶー", univ: "IT大学" };
console.log(clone); // { name: "foo", univ: "IT大学" };
