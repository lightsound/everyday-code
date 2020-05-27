function fn(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // [three, four, five]
}
fn("one", "two", "three", "four", "five");

// ちなみに Rest parameters は引数の最後でないとエラーが出ます。
function fn(...args, a, b) { } // Rest parameter must be last formal parameter
function fn(a, ...args, b) { } // Rest parameter must be last formal parameter
