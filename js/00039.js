const obj = {
  nest: { name: "しまぶー" },
};
const clone = {
  ...obj,
  nest: { ...obj.nest },
};

console.log(obj.nest === clone.nest); // false
clone.nest.name = "foo";
console.log(obj.nest.name); // しまぶー 😊
