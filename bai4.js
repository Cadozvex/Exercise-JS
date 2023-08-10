const lotsOfMath = (firstNum, secondNum, thirdNum, fourNum) => {
  var sum = firstNum + secondNum,
    minus = thirdNum - fourNum,
    multiplication = sum * minus,
    modulo = multiplication % firstNum;
  console.log("first result: sum = " + sum);
  console.log("second result: minus = " + minus);
  console.log("third result: multiplication = " + multiplication);
  if (firstNum === 0) {
    return "undefined";
  } else {
    return "result: " + modulo;
  }
};
//Test
console.log(lotsOfMath(4, 2, 1.5, -1.5));
console.log("=========================");
console.log(lotsOfMath(0, 2, 1.5, -1));
