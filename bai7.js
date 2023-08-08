//Function that returns an array of non-repeated values when adjacent
function uniqueInOrder(iterable) {
  var result = []; // The empty array will contain the final result
  for (var i = 0; i < iterable.length; i++) {
    // Iterate through each element in the iterable
    if (iterable[i] !== result[result.length - 1]) {
      // Check if the current element is not equal to the last element in the 'result' array
      // If they are not equal, it means this element is unique, so add it to the 'result' array
      result.push(iterable[i]);
    }
  }
  return result;
}

// Test
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcADddddd"));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7]));
