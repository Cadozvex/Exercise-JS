//Function to find the sum of odd or even numbers
const sumOfOddOrEven = (arrOfNumber) => {
  var sum = 0;
  //Calculate the sum of a list of integers
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  //If the sum is not divisible by 2, return 'odd'
  if (sum % 2 == 1) {
    return "odd";
  }
  //Otherwise, return 'even'
  else {
    return "even";
  }
};
//Test
console.log(sumOfOddOrEven([1, 2, -3, 4]));
console.log(sumOfOddOrEven([]));
