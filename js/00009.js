const obj = {
  sns: {
    twitter: "https://twitter.com/shimabu_it",
    instagram: "https://instagram.com/shimabu_it",
  },
};
const {
  sns: { twitter, instagram: insta },
} = obj;

console.log(twitter); // "https://twitter.com/shimabu_it"
console.log(instagram); // Error: instagram is not defined
console.log(insta); // "https://instagram.com/shimabu_it"
