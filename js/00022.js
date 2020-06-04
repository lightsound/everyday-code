/**
 * 【破壊的なメソッド】
 * 元の配列自体を変更するメソッド
 * そのまま使うのはあまり好まれない
 * 例） push()
 */
const abc = ["A", "B", "C"];
const result = abc.push("D");
console.log(abc); // ["A", "B", "C", "D"]
console.log(result); // 4 ← 追加後の配列の個数
