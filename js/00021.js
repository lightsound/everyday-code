const abc = ["A", "B", "C"];
const foo = "FOO";

const res1 = [].concat(abc, foo);
console.log(res1); // ["A", "B", "C", "FOO"]

const res2 = [...abc, ...foo];
console.log(res2); // ["A", "B", "C", "F", "O", "O"]

const res3 = [...abc, foo];
console.log(res2); // ["A", "B", "C", "FOO"]
