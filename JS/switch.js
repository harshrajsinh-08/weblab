const prompt = require('prompt-sync')()

let room = prompt("Enter room number:");

switch (room) {
  case '823':
    console.log("Java Programming");
    break;

  case '824':
    console.log("Python Programming");
    break;

  default:
    console.log("Invalid input");
    break;
}
