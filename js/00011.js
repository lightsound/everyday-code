/**
 * Truthy な値とは？
 * Boolean コンテキスト （if 文の条件式など） で true とみなされる値です
 * falsy な値を除くすべての値は truthy です
 * 例えば、下記の条件はすべて true と評価され、処理が実行されます
 */

// prettier-ignore
if (true) { /* 処理 */ }
// prettier-ignore
if ({}) { /* 処理 */ }
// prettier-ignore
if ([]) { /* 処理 */ }
// prettier-ignore
if (1) { /* 処理 */ }
// prettier-ignore
if (-1) { /* 処理 */ }
// prettier-ignore
if ("0") { /* 処理 */ }
// prettier-ignore
if ("false") { /* 処理 */ }
// prettier-ignore
if (new Date()) { /* 処理 */ }
