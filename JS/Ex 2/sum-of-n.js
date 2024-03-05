const prompt = require('prompt-sync')()

function calsum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("The sum of the first "+n+" numbers is: "+sum);
}

let n = prompt("Enter a number: ")
n = parseInt(n)
calsum(n);
