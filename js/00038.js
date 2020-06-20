const obj = {
  nest: { name: "しまぶー" },
};
const clone = { ...obj };

console.log(obj.nest === clone.nest); // true
clone.nest.name = "foo";
console.log(obj.nest.name); // foo 😱
