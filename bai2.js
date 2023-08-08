//Function to capitalize the first letter
function capitalizeText(text) {
  var arr = [];
  var x = text.split(" ");
  //Function to split a string into an array, capitalize the first letter, and then concatenate with the remaining letters of the word
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
      arr.push(x[i]);
    }
  }
  //Join the array back together and trim excess spaces
  arr = arr.join(" ").trim();
  return arr;
}

//Test
console.log(capitalizeText("   ah ah đầkh asfkha ma à"));
console.log(capitalizeText("      tên               tôi là          "));
