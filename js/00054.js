const user = [
  { emoji: "👩‍💻", job: "engineer" },
  { emoji: "👩‍💼", job: "sales" },
  { emoji: "👨‍🎨", job: "designer" },
  { emoji: "👨‍💼", job: "sales" },
];
const result = user.find((value) => {
  return value.job === "youtuber";
});

console.log(result); // undefined
