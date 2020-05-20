// 既定値
const obj = { name: "しまぶー" };
const { name, univ = "IT大学" } = obj;
console.log(`${name}の${univ}`); // "しまぶーのIT大学"

// 既定値は上書きされる
const obj = { name: "しまぶー", univ: "IT大学" };
const { name = "中田敦彦", univ = "YouTube大学" } = obj;
console.log(`${name}の${univ}`); // "しまぶーのIT大学"
