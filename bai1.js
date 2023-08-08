//Function to remove duplicate elements
function uniqueElements(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

//Function to find common and different values
function findCommonAndDifferent(arr1, arr2) {
  console.log("arr1: " + arr1);
  console.log("arr2: " + arr2);
  var common = [],
    different = [];
  var result = {};

  //Replace multiple consecutive spaces with a single space in array 1
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "string") {
      if (arr1[i].trim() == "") {
        arr1[i] = " ";
      }
    }
  }
  //Replace multiple consecutive spaces with a single space in array 2
  for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === "string") {
      if (arr2[i].trim() == "") {
        arr2[i] = " ";
      }
    }
  }
  //Iterate through arrays 1 and 2
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //Place the common elements into the 'common' array
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
        break;
      } else {
        //Place the different elements into the 'different' array
        different.push(arr1[i]);
      }
    }
  }
  //Iterate through array 2 and the 'different' array
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < different.length; j++) {
      //Find elements in array 2 that are not in the 'different' array and add them to the 'different' array
      if (arr2[i] !== different[j]) {
        different.push(arr2[i]);
        break;
      }
    }
  }
  //Remove duplicate elements from the 'different' array
  different = uniqueElements(different);
  result["common"] = common;
  //Iterate through the 'common' and 'different' arrays
  for (let i = 0; i < common.length; i++) {
    for (let j = 0; j < different.length; j++) {
      //Remove elements that exist in the 'common' array from the 'different' array
      if (common[i] === different[j]) {
        different = different.filter((element) => element !== common[i]);
      }
    }
  }
  result["different"] = different;
  return result;
}
// Test
console.log(
  findCommonAndDifferent(
    ["   ", 1, " adh    fkh    ", , "door"],
    [1, 2, "1", "           ", "door", , 2]
  )
);
