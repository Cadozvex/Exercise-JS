//Function to find distinct values
//chưa tối ưu
const findDistinctValues = (arr) => {
  //Iterate through the array to count the number of even and odd values
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 !== arr[i + 1] % 2) {
      if (arr[i] % 2 !== arr[i + 2] % 2) {
        return arr[i];
      } else {
        return arr[i + 1];
      }
    } else {
      if (arr[i] % 2 !== arr[i + 2] % 2) {
        return arr[i + 2];
      } else {
        continue;
      }
    }
  }
};
// Test
const arr1 = [2, 4, 0, 100, 4, 2602, 36, 12, 112, 14, 11];
console.log(findDistinctValues(arr1));
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(findDistinctValues(arr2));
