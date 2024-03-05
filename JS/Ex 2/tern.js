const prompt = require('prompt-sync')()
let ask = prompt("Enter the mark:")
let mark = parseFloat(ask);
let newMark = mark >= 40 ? mark + 10 : mark + 20;
console.log("New Mark: " + newMark);
