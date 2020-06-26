const animals1 = ["🐶", "🐱", "🐰"].map(function (value) {
  return `${value}✨`;
});
const animals2 = ["🐶", "🐱", "🐰"].map((value) => {
  return `${value}✨`;
});
const animals3 = ["🐶", "🐱", "🐰"].map((value) => `${value}✨`);
// prettier-ignore
const animals4 = ["🐶", "🐱", "🐰"].map(value => `${value}✨`);
