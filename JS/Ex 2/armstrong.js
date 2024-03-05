const prompt = require('prompt-sync')()

function isArm(number) {
    const str = String(number);
    const totdigits = str.length;
    let sum = 0;
    for (let i = 0; i < totdigits; i++) {
        const digit = parseInt(str[i], 10);
        sum += Math.pow(digit, totdigits);
    }
    return sum === number;
}
const num = prompt("Enter the number");

if (isArm(num)) {
    console.log(`${num} is an Armstrong number.`);
} else {
    console.log(`${num} is not an Armstrong number.`);
}
