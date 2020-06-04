const num1 = [1, 2];
const num2 = [3, 4];
const num3 = [5, 6];

const res1 = [...num1, ...num2];
const res2 = [...num1, ...num2, ...num3];
console.log(res1); // [1, 2, 3, 4]
console.log(res2); // [1, 2, 3, 4, 5, 6]
