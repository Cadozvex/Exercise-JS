// ---------Exercise 1: ----------
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
    different = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //Find and push distinct elements into the 'different' array
      if (arr1[i] === arr2[j]) {
        continue;
      } else {
        different.push(arr1[i]);
        different.push(arr2[j]);
      }
    }
  }
  different = uniqueElements(different);
  for (let i = 0; i < arrCommon.length; i++) {
    for (let j = 0; j < different.length; j++) {
      //Remove elements that exist in the 'arrCommon' array from the 'different' array
      if (arrCommon[i] === different[j]) {
        different = different.filter((element) => element !== arrCommon[i]);
      }
    }
  }
  result["different"] = different;
  return JSON.stringify(result);
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
// ---------Exercise 2: ---------
//Function to capitalize the first letter
const capitalizeText = (text) => {
  var arr = [];
  var newArr = text.split(" ");
  //Function to split a string into an array, capitalize the first letter, and then concatenate with the remaining letters of the word
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] !== "") {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
      arr.push(newArr[i]);
    }
  }
  //Join the array back together and trim excess spaces
  text = arr.join(" ");
  return { result: text };
};
// Test
console.log(JSON.stringify(capitalizeText("   ah ah đầkh asfkha ma à")));
console.log(
  JSON.stringify(capitalizeText("      tên               tôi là          "))
);
//  --------- Exercise 3: ---------
//Function to find the sum of odd or even numbers
const sumOfOddOrEven = (arrOfNumber) => {
  var sum = 0;
  //Calculate the sum of a list of integers
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  //If the sum is not divisible by 2, return 'odd'
  if (sum % 2 == 1) {
    return { result: "odd" };
  }
  //Otherwise, return 'even'
  else {
    return { result: "even" };
  }
};

var result = sumOfOddOrEven([1, 2, -3, 4, 5]);
//   var result = sumOfOddOrEven([]);
// Test
console.log(JSON.stringify(result));

//  --------- Exercise 4: ---------
const lotsOfMath = (firstNum, secondNum, thirdNum, fourNum) => {
  var sum = firstNum + secondNum,
    minus = thirdNum - fourNum,
    multiplication = sum * minus,
    modulo = multiplication % firstNum;
  var result = {};
  console.log("first result: sum = " + sum);
  console.log("second result: minus = " + minus);
  console.log("third result: multiplication = " + multiplication);
  if (firstNum === 0) {
    return "undefined";
  } else {
    result["modulo"] = modulo;
  }
  return JSON.stringify(result);
};
//Test
console.log(lotsOfMath(4, 2, 1.5, -1.5));
console.log("=========================");
console.log(lotsOfMath(0, 2, 1.5, -1));

// --------- Exercise 5: ---------
//Function to find the middle value of a word
const getMiddle = (word) => {
  // Trim leading and trailing spaces of the given word
  const trimmedWord = word.trim();

  // Calculate the length of the trimmed word
  const length = trimmedWord.length;

  // If the length of the word is odd, return the character in the middle
  if (length % 2 === 1) {
    return { result: trimmedWord.charAt(Math.floor(length / 2)) };
  } else {
    // Otherwise, take the two characters in the middle
    return { result: trimmedWord.substr(length / 2 - 1, 2) };
  }
};

// Test
console.log(getMiddle("      test    "));
console.log(getMiddle("      testing"));
console.log(getMiddle("middle       "));
console.log(getMiddle("A"));

// --------- Exercise 6: ---------
//Function to sort the largest number
const sortTheLargestNumber = (inputNumStr) => {
  //Convert an integer into an array of digits
  var arrayOfDigits = String(inputNumStr).split("").map(Number);
  //Sort the array of digits in descending order
  arrayOfDigits.sort((a, b) => b - a);
  //Convert the array of digits back into an integer
  var largestNumber = parseInt(arrayOfDigits.join(""));
  //JSON:
  return { result: largestNumber };
};
// Test
console.log(sortTheLargestNumber("00042145"));
console.log(sortTheLargestNumber("42145"));
console.log(sortTheLargestNumber("145263"));
console.log(sortTheLargestNumber("156703450012231"));

// --------- Exercise 7: ---------
//Function that returns an array of non-repeated values when adjacent
const uniqueInOrder = (iterable) => {
  var result = []; // The empty array will contain the final result
  for (var i = 0; i < iterable.length; i++) {
    // Iterate through each element in the iterable
    if (iterable[i] !== result[result.length - 1]) {
      // Check if the current element is not equal to the last element in the 'result' array
      // If they are not equal, it means this element is unique, so add it to the 'result' array
      result.push(iterable[i]);
    }
  }
  //JSON:
  return { result: result };
};

// Test
console.log(uniqueInOrder("AAAABBB   CC        DAABBB"));
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcADddddd"));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7]));

// --------- Exercise 8: ---------
//Function to find distinct values
//Function to find distinct values
//chưa tối ưu
const findDistinctValues = (arr) => {
  //Iterate through the array to count the number of even and odd values
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 !== arr[i + 1] % 2) {
      if (arr[i] % 2 !== arr[i + 2] % 2) {
        return { result: arr[i] };
      } else {
        return { result: arr[i + 1] };
      }
    } else {
      if (arr[i] % 2 !== arr[i + 2] % 2) {
        return { result: arr[i + 2] };
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
