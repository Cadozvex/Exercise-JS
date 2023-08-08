function lotsOfMath(a, b, c, d) {
  var a, b, c, d;
  console.log("first: a + b = " + (a + b));
  console.log("second: c - d = " + (c - d));
  var third = (a + b) * (c - d);
  console.log("third: " + third);
  if (a === 0) {
    return "undefined";
  } else {
    return "result: " + (third % a);
  }
}
//Test
console.log(lotsOfMath(4, 2, 1.5, -1.5));
