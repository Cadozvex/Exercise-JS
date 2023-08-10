//Function to capitalize the first letter
const capitalizeText = (text) => {
  var arr = text.split(" ");
  var newArr = [];
  //Function to split a string into an array, capitalize the first letter, and then concatenate with the remaining letters of the word
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      newArr.push(arr[i]);
    }
  }
  //Join the array back together and trim excess spaces
  text = newArr.join(" ");
  return text;
};

//Test
console.log(capitalizeText("   ah ah đầkh asfkha ma à"));
console.log(capitalizeText("      tên               tôi là          "));
