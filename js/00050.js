const animals = [
  { emoji: "🐼", canFly: false },
  { emoji: "🦉", canFly: true },
  { emoji: "🐯", canFly: false },
  { emoji: "🕊", canFly: true },
];
const birds = animals.filter((animal) => animal.canFly);
console.log(birds);
// [{ emoji: "🦉", canFly: true }, { emoji: "🕊", canFly: true }]
