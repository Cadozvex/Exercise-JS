//Function to count characters in a string
function countCharacter(arr) {
  //Split the string into an array
  arr = arr.split("");
  var newArr = [];
  //Start an outer loop to iterate through each element in the original 'arr' array
  for (var i = 0; i < arr.length; i++) {
    //Initialize a variable 'count' to track the occurrences of the current element
    var count = 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        //Remove the duplicate element at index 'j' using 'splice'
        arr.splice(j, 1);
        j--; // Decrease 'j' to re-evaluate the new element after deletion
      }
    }
    // Add a string representation for the element and its count
    newArr.push("'" + arr[i] + "':" + count);
  }
  return "{" + newArr + "}";
}
//Test
console.log(countCharacter("aba"));
console.log(countCharacter("Hello world!"));
console.log(
  countCharacter(
    "Xin chào các bạn. Chào mừng các bạn đã đến với không là Cái Gì"
  )
);
