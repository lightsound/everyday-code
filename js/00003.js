// 分割代入
const [name, univ] = ["しまぶー", "IT大学"];
console.log(`${name}の${univ}`); // => しまぶーのIT大学

// 既定値
const [name, univ = "IT大学"] = ["しまぶー"];
console.log(`${name}の${univ}`); // => しまぶーのIT大学

// 既定値もなく代入する値もなければ undefined になる
const [name, univ] = ["しまぶー"];
console.log(`${name}の${univ}`); // => しまぶーのundefined

// 既定値は分割代入の値が上書き
const [name = "中田敦彦", univ = "YouTube大学"] = ["しまぶー", "IT大学"];
console.log(`${name}の${univ}`); // => しまぶーのIT大学

// 変数に入れた値からも分割代入は可能
const array = ["しまぶー", "IT大学"];
const [name, univ] = array;
console.log(`${name}の${univ}`); // => しまぶーのIT大学
