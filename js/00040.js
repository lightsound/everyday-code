const animals = ["🐶", "🐱", "🐰"];
animals.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 出力
// 🐶, 0, ["🐶", "🐱", "🐰"]
// 🐱, 1, ["🐶", "🐱", "🐰"]
// 🐰, 2, ["🐶", "🐱", "🐰"]
