const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const filterItems = (items, query) => {
  return items.filter((item) => item.includes(query));
};
filterItems(fruits, "ap"); // ['apple', 'grapes']
filterItems(fruits, "an"); // ['banana', 'mango', 'orange']
