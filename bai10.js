// ---------Exercise 1: ----------
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
  return JSON.stringify(result);
}
// Test
console.log(
  findCommonAndDifferent(
    ["   ", 1, " adh    fkh    ", , "door"],
    [1, 2, "1", "           ", "door", , 2]
  )
);
// ---------Exercise 2: ---------
//Function to capitalize the first letter
function capitalizeText(text) {
  var arr = [];
  var x = text.split(" ");
  //Function to split a string into an array, capitalize the first letter, and then concatenate with the remaining letters of the word
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
      arr.push(x[i]);
    }
  }
  //Join the array back together and trim excess spaces
  arr = arr.join(" ").trim();
  return { result: arr };
}
// Test
console.log(JSON.stringify(capitalizeText("   ah ah đầkh asfkha ma à")));
console.log(
  JSON.stringify(capitalizeText("      tên               tôi là          "))
);
//  --------- Exercise 3: ---------
//Function to find the sum of odd or even numbers
function sumOfOddOrEven(arr) {
  var sumA = 0;
  //Calculate the sum of a list of integers
  for (var i = 0; i < arr.length; i++) {
    sumA = sumA + arr[i];
  }
  //If the sum is not divisible by 2, return 'odd'
  if (sumA % 2 === 1) {
    return { result: "odd" };
  }
  //Otherwise, return 'even'
  else {
    return { result: "even" };
  }
}

var result = sumOfOddOrEven([1, 2, -3, 4, 5]);
//   var result = sumOfOddOrEven([]);
// Test
console.log(JSON.stringify(result));

//  --------- Exercise 4: ---------
function lotsOfMath(a, b, c, d) {
  var a, b, c, d;
  var result = {};
  result["first"] = a + b;
  result["second"] = c - d;
  var third = (a + b) * (c - d);
  result["third"] = third;
  if (a === 0) {
    return "undefined";
  } else {
    result["result"] = third % a;
  }
  return JSON.stringify(result);
}
// Test
console.log(lotsOfMath(4, 2, 1.5, -1.5));

// --------- Exercise 5: ---------
//Function to find the middle value of a word
function getMiddle(word) {
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
}

// Test
console.log(getMiddle("      test    "));
console.log(getMiddle("      testing"));
console.log(getMiddle("middle       "));
console.log(getMiddle("A"));

// --------- Exercise 6: ---------
//Function to sort the largest number
function sortTheLargestNumber(inputNumber) {
  //Convert an integer into an array of digits
  let mangChuinputNumber = String(inputNumber).split("").map(Number);
  //Sort the array of digits in descending order
  arrayOfDigits.sort((a, b) => b - a);
  //Convert the array of digits back into an integer
  let largestNumber = parseInt(arrayOfDigits.join(""), 10);
  //JSON:
  return { result: largestNumber };
}
// Test
console.log(sortTheLargestNumber(42145));
console.log(sortTheLargestNumber(145263));
console.log(sortTheLargestNumber(123456789));

// --------- Exercise 7: ---------
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
  //JSON:
  return { result: result };
}

// Test
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcADddddd"));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7]));

// --------- Exercise 8: ---------
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
    return { result: arr.find((num) => num % 2 !== 0) }; // Return the even value
  } else {
    return { result: arr.find((num) => num % 2 === 0) }; // Return the odd value
  }
}
//Test
const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(findDistinctValues(arr1));
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(findDistinctValues(arr2));
