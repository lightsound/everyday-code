const obj1 = { name: "中田敦彦", univ: "YouTube大学" };
const obj2 = { name: "しまぶー", univ: "IT大学" };

const mergedObj = { ...obj1, ...obj2 };
// { name: "しまぶー", univ: "IT大学" };
