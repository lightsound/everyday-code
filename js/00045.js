const animals = [{ emoji: "🐶" }, { emoji: "🐱" }];
const newAnimals = animals.map((value) => {
  return { ...value, double: value.emoji + value.emoji };
});

console.log(animals);
// [{ emoji: "🐶" }, { emoji: "🐱" }]
console.log(newAnimals);
// [{ emoji: "🐶", double: "🐶🐶" }, { emoji: "🐱", double: "🐱🐱" }]
