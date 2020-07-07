const user = [
  { emoji: "👩‍💻", job: "engineer" },
  { emoji: "👩‍💼", job: "sales" },
  { emoji: "👨‍🎨", job: "designer" },
  { emoji: "👨‍💼", job: "sales" },
];
const result = user.find((value) => {
  return value.job === "sales";
});

console.log(result); // { emoji: "👩‍💼", job: "sales" }
// true がきた時点で反復処理が中断するので
// 4 人目の sales は result に入らないですし、
// 3 人目の designer もテストされません。
