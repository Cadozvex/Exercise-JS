//Function to capitalize the first letter
const capitalizeText = (text) => {
  var arr = [];
  var newArr = text.split(" ");
  //Function to split a string into an array, capitalize the first letter, and then concatenate with the remaining letters of the word
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] !== "") {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
      arr.push(newArr[i]);
    }
  }
  //Join the array back together and trim excess spaces
  text = arr.join(" ");
  return text;
}

//Test
console.log(capitalizeText("   ah ah đầkh asfkha ma à"));
console.log(capitalizeText("      tên               tôi là          "));
