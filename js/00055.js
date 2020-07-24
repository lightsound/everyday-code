const animals = [
  { emoji: "🐕", type: "dog" },
  { emoji: "🐩", type: "dog" },
  { emoji: "🐈", type: "cat" },
  { emoji: "🦮", type: "dog" },
];
const result = animals.some((value) => {
  return value.type === "cat";
});

console.log(result); // true
