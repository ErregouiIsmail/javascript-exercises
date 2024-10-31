const repeatString = function (text, number) {
  let newtext = "";
  for (let i = 0; i < number; i++) {
    newtext = newtext + text;
  }
  return newtext;
};

// Do not edit below this line
module.exports = repeatString;
