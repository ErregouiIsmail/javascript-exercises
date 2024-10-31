const sumAll = function (startInt, endInt) {
  if (
    !Number.isInteger(startInt) ||
    !Number.isInteger(endInt) ||
    startInt < 0 ||
    endInt < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (startInt > endInt) {
    let temp = startInt;
    startInt = endInt;
    endInt = temp;
  }
  for (let i = startInt; i <= endInt; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
