function isEven(num) {
  return num % 2 === 0; // 2で割って余り0は偶数
}
const numbers = [1, 2, 5, 10, 20, 25, 50];
const evens = numbers.filter(isEven);
console.log(evens); // [2, 10, 20, 50]
