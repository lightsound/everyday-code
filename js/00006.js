// 異なる名前を持つ変数への代入
const obj = { javascript: "最強" };
const { javascript: js } = obj;

console.log(js); // 最強
console.log(obj.javascript); // 最強
console.log(javascript); // Error: javascript is not defined
