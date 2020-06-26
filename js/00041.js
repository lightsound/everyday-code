const animals = ["🐶", "🐱", "🐰"];
const newAnimals = animals.map((value, index, array) => {
  console.log(value, index, array);
  return value; // ← map メソッドは返り値があるよ
});

// map 内の log の出力（ forEach のときと一緒）
// 🐶, 0, ["🐶", "🐱", "🐰"]
// 🐱, 1, ["🐶", "🐱", "🐰"]
// 🐰, 2, ["🐶", "🐱", "🐰"]

console.log(newAnimals); // ["🐶", "🐱", "🐰"]
console.log(animals === newAnimals); // false （非破壊的👍）
