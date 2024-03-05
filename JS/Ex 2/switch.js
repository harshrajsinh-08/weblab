const prompt = require('prompt-sync')()
let n = prompt("Enter a number between 1 and 3:");

switch (parseInt(n)) {
  case 1:
    console.log("one");
    break;

  case 2:
    console.log("two");
    break;

  case 3:
    console.log("three");
    break;

  default:
    console.log("Wrong Input");
    break;
}
