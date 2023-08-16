// //Function to find distinct values
const findDistinctValues = (arr) => {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === arr[i + 1] % 2) {
      temp = arr[i] % 2; //rt chẵn
      break;
    } else {
      if (arr[i] % 2 === arr[i + 2] % 2) {
        return arr[i + 1];
      } else {
        temp = arr[i + 1] % 2; //rt lẻ
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== temp) {
      return arr[i];
    }
  }
};
// Test
const arr1 = [12, 14, 4, 3940, 10, 34, 76, 3];
console.log(findDistinctValues(arr1));
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(findDistinctValues(arr2));
