const prompt = require('prompt-sync')()

function rev(n) {
    let revnum = 0;

    while (n !== 0) {
        const digit = n % 10;
        revnum = revnum * 10 + digit;
        n = Math.floor(n / 10);
    }

    return revnum;
}
let n = prompt("Enter an integer: ");
n = parseInt(n);
if (!isNaN(n)) {
    const res = rev(n);
    console.log("Reverse of the digits: "+res);
} else {
    console.log("Invalid input");
}
