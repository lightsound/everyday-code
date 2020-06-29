const animals = ["🐶", "🐱", "🐰"];

const allOk = animals.filter(() => true);
console.log(allOk); // ["🐶", "🐱", "🐰"];

const allNg = animals.filter(() => false);
console.log(allNg); // [];
