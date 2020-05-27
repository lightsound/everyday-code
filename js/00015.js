// 通常の引数を持つ関数
function fn(a, b) {
  console.log(a, b);
}
fn(1, 2); // log の中身: 1, 2

// Rest parameters を用いた関数
function fn(...args) {
  console.log(args);
}
fn(1, 2); // log の中身: [1, 2]
fn(1, 2, 5, 10); // log の中身: [1, 2, 5, 10]
