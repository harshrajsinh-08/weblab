const prompt = require('prompt-sync')()
let n = prompt("Enter a number:");
n = parseInt(n);

if (isNaN(n)) {
  console.log("Invalid n");
} else {
  for (let i = 1; i <= 10; i++) {
    let res = n * i;
    console.log((n)+"* "+i+" = "+(n*i))
  }
}
