const prompt = require('prompt-sync')()
let n1 = prompt("Enter the first integer:");
let n2 = prompt("Enter the second integer:");
let n3 = prompt("Enter the third integer:");
n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

let greater = n1;

if (n2 > greater) {
    greater = n2;
}

if (n3 > greater) {
    greater = n3;
}

console.log("the greatest among "+n1+","+n2+","+"and "+n3+" is: "+greater)
// console.log(`The greatest number among ${n1}, ${n2}, and ${n3} is: ${greater}`);
