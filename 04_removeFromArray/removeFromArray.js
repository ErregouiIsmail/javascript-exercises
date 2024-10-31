const removeFromArray = function (arrayToRemoveFrom, ...stuffToRemove) {
  const newArray = new Array();
  for (const arg of arrayToRemoveFrom) {
    for (const toRemove of stuffToRemove) {
      if (!stuffToRemove.includes(arg)) {
        newArray.push(arg);
      }
      break;
    }
  }
  return newArray;
};
//removeFromArray(["1","2","3"], 1,"2","ismail")

// Do not edit below this line
module.exports = removeFromArray;
