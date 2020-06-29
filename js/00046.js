const animals = ["🐶", "🐱", "🐰"];
const newAnimals = animals.filter((value, index, array) => {
  console.log(value, index, array);
  return value === "🐱"; // ← 条件が true なら新たな配列に要素を追加
});

// filter 内の log の出力（ map, forEact と一緒）
// 🐶, 0, ["🐶", "🐱", "🐰"]
// 🐱, 1, ["🐶", "🐱", "🐰"]
// 🐰, 2, ["🐶", "🐱", "🐰"]

console.log(newAnimals); // ["🐱"] 要素が1個でも0個でも返り値は配列
console.log(animals === newAnimals); // false （非破壊的👍）
