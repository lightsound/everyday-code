// 変数名は自由に設定可能
const [foo, bar] = [1, 2];
console.log(foo); // 1
console.log(bar); // 2

// 値の無視 (この例では 2 を無視している)
const [foo, , bar] = [1, 2, 3];
console.log(foo); // 1
console.log(bar); // 3

// 変数の入れ替え
let a = "hello";
let b = "world";

[a, b] = [b, a];
console.log(a); // world
console.log(b); // hello

// 関数の返り値としての分割代入
function fn() {
  return [1, 2];
}
const [a, b] = fn();
console.log(a); // 1
console.log(b); // 2

// React の useState などでよく使われる
// useState が関数で配列を返している
const [count, setCount] = useState(0);
console.log(count); // 0
setCount(count + 1);
console.log(count); // 1
