const reverseString = function (text) {
  let string = text;
  const reversedStringArray = [];

  for (let i = string.length; i > 0; i--) {
    reversedStringArray.push(string[i - 1]);
  }
  let reversedString = reversedStringArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
