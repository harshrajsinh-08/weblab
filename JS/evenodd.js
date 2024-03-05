const prompt = require('prompt-sync')();
function chck(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var n = prompt("Enter a number:");
var res = chck(parseInt(n));

console.log(res);
