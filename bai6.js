//Function to sort the largest number
function sortTheLargestNumber(inputNumber) {
  //Convert an integer into an array of digits
  var arrayOfDigits = String(inputNumber).split("").map(Number);
  //Sort the array of digits in descending order
  arrayOfDigits.sort((a, b) => b - a);
  //Convert the array of digits back into an integer
  var largestNumber = parseInt(arrayOfDigits.join(""), 10);
  return largestNumber;
}
// Test
console.log(sortTheLargestNumber(42145));
console.log(sortTheLargestNumber(145263));
console.log(sortTheLargestNumber(123456789));
