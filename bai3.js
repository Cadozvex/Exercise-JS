//Function to find the sum of odd or even numbers
function sumOfOddOrEven(arr) {
  var sumA = 0;
  //Calculate the sum of a list of integers
  for (var i = 0; i < arr.length; i++) {
    sumA = sumA + arr[i];
  }
  //If the sum is not divisible by 2, return 'odd'
  if (sumA % 2 == 1) {
    return "odd";
  }
  //Otherwise, return 'even'
  else {
    return "even";
  }
}
//Test
console.log(sumOfOddOrEven([1, 2, -3, 4]));
