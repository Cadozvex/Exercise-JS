//Function to find distinct values
function findDistinctValues(arr) {
  var oddCount = 0;
  var evenCount = 0;
  //Iterate through the array to count the number of even and odd values
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  // Check if the count of odd or even numbers is 1 and return the corresponding element
  if (oddCount === 1) {
    return arr.find((num) => num % 2 !== 0); // Return the even value
  } else {
    return arr.find((num) => num % 2 === 0); // Return the odd value
  }
}
// Test
const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(findDistinctValues(arr1));
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(findDistinctValues(arr2));
