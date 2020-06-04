const num1 = [1, 2];
const num2 = [3, 4];

// どちらも結果は同じで、どちらを選ぶかは好みです。
const res1 = [].concat(num1, num2); // [1, 2, 3, 4]
const res2 = num1.concat(num2); // [1, 2, 3, 4]
