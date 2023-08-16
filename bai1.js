//Function to remove duplicate elements
const uniqueElements = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

//function replace spaces with commas
const myFunction = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      if (array[i].trim() == "") {
        array[i] = " ";
      }
    }
  }
};

//Function find common
const findCommon = (arr1, arr2) => {
  myFunction(arr1);
  myFunction(arr2);
  var common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //Push elements that are similar into the 'common' array
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
        break;
      }
    }
  }
  common = uniqueElements(common);
  return common.sort();
};

//Function find different
const findDifferent = (arr1, arr2) => {
  var arrCommon = findCommon(arr1, arr2),
    different = [...arr1, ...arr2];

  different = uniqueElements(different);
  for (let i = 0; i < arrCommon.length; i++) {
    //Remove elements that exist in the 'arrCommon' array from the 'different' array
    different = different.filter((element) => element !== arrCommon[i]);
  }
  return different.sort();
};

// Test
console.log(
  findCommon(
    ["   ", 1, " adh    fkh    ", , "door"],
    [1, 2, "1", "           ", "door", , 2]
  )
);
console.log(
  findDifferent(
    ["   ", 1, " adh    fkh    ", , "door"],
    [1, 2, "1", "           ", "door", , 2]
  )
);
console.log(
  findCommon([1, 1, 2, 5, -9, "f", " ", "a"], [1, 2, "1", -5, -9, 2, "a", "f"])
);
console.log(
  findDifferent(
    [1, 1, 2, 5, -9, "f", " ", "a"],
    [1, 2, "1", -5, -9, 2, "a", "f"]
  )
);
