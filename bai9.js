//Function to count characters in a string
const countCharacter = (str) => {
  var object = {};
  console.log(str);
  for (let i = 0; i < str.length - 1; i++) {
    if (object[str[i]]) {
      object[str[i]] += 1;
    } else {
      object[str[i]] = 1;
    }
  }
  return object;
};

//Test
console.log(countCharacter("abaaa cxyyz c c"));
console.log(countCharacter("Hello world!"));
console.log(
  countCharacter(
    "Xin chào các bạn. Chào mừng các bạn đã đến với không là Cái Gì"
  )
);
