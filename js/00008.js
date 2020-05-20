const obj = {
  nickname: "しまぶー",
  university: "IT大学",
};
const {
  nickname: name,
  university: univ = "学校",
  language: lang = "JavaScript",
} = obj;

console.log(nickname); // Error: nickname is not defined
console.log(name); // "しまぶー"
console.log(university); // Error: university is not defined
console.log(univ); // "IT大学"
console.log(language); // Error: language is not defined
console.log(lang); // "JavaScript"
