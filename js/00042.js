const animals = ["🐶", "🐱", "🐰"];
const newAnimals = animals.map((value) => {
  return `${value}✨`; // ← 返り値に ✨ をつけているよ
});

console.log(animals); // ["🐶", "🐱", "🐰"]
console.log(newAnimals); // ["🐶✨", "🐱✨", "🐰✨"]
