const obj1 = { name: "中田敦彦", job: "お笑い芸人" };
const obj2 = { name: "しまぶー", univ: "IT大学" };
const obj3 = { name: "ヒカキン", age: 31 };

const mergedObj = { ...obj1, ...obj2, ...obj3 };
// { name: "ヒカキン", job: "お笑い芸人", univ: "IT大学", age: 31 };
