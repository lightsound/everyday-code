/**
 * Falsy な値とは？
 * Boolean コンテキスト （if 文の条件式など） で false とみなされる値です
 * 下記の条件はすべて false と評価され、処理が実行されることはありません
 */

// prettier-ignore
if (false) { /* 処理 */ }
// prettier-ignore
if (null) { /* 処理 */ }
// prettier-ignore
if (undefined) { /* 処理 */ }
// prettier-ignore
if (0) { /* 処理 */ }
// prettier-ignore
if (NaN) { /* 処理 */ }
// prettier-ignore
if ('') { /* 処理 */ }
// prettier-ignore
if ("") { /* 処理 */ }
// prettier-ignore
if (``) { /* 処理 */ }
