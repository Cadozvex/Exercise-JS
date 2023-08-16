//Function to sort the largest number
const sortTheLargestNumber = (inputNumStr) => {
  //Convert an integer into an array of digits
  var arrayOfDigits = inputNumStr.split("");

  //Sắp xếp nổi bọt
  for (let i = 0; i < arrayOfDigits.length - 1; i++) {
    for (let j = arrayOfDigits.length - 1; j > i; j--) {
      if (arrayOfDigits[j] > arrayOfDigits[j - 1]) {
        let tg = arrayOfDigits[j];
        arrayOfDigits[j] = arrayOfDigits[j - 1];
        arrayOfDigits[j - 1] = tg;
      }
    }
  }
  //Convert the array of digits back into an integer
  var inputNumStr = parseInt(arrayOfDigits.join(""));

  return inputNumStr;
};
//Test
console.log(sortTheLargestNumber("00042145"));
console.log(sortTheLargestNumber("42145"));
console.log(sortTheLargestNumber("145263"));
console.log(sortTheLargestNumber("156703450012231"));
