const name = "しまぶーのIT大学";
console.log(name.toLowerCase()); // "しまぶーのit大学"
console.log(name); // "しまぶーのIT大学" ← 非破壊的 👍

console.log(name.includes("it")); // false
console.log(name.toLowerCase().includes("it")); // true
