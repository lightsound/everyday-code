/**
 * 【非破壊的メソッド】
 * 元の配列オブジェクトに影響を及ぼさずに
 * 新たな配列オブジェクトを返すメソッド。
 * 破壊的より非破壊的メソッドの方が好んで使われる。
 * 例） concat(), spread syntax
 */
const abc = ["A", "B", "C"];
const result = [].concat(abc, "D");
console.log(abc); // ["A", "B", "C"] ← 元ののまま
console.log(result); // ["A", "B", "C", "D"]
