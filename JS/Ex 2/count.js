const prompt = require('prompt-sync')()


function isEven(num) {
    return num % 2 === 0;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countdig(number) {
    let even = 0;
    let odd = 0;
    let prime = 0;
    let digits = number.toString();

    for (let i = 0; i < digits.length; i++) {
        const d = parseInt(digits[i]);

        if (isEven(d)) {
            even++;
        } else {
            odd++;
        }

        if (isPrime(d)) {
            prime++;
        }
    }

    console.log("Number of even digits: " + even);
    console.log(":Number of odd digits: " + odd);
    console.log("Number of prime digits: " + prime);
}
let n = prompt("Enter a number: ");
n = parseInt(n);
if (!isNaN(n)) {
    countdig(n);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
