const prompt = require('prompt-sync')()
function area(rad) {
    return Math.PI * rad * rad;
  }

  let r = prompt("Enter the radius of the circle:");
  let rad = parseFloat(r);
  if (isNaN(rad) || rad <= 0) {
    console.log("Please enter a positive number for the radius.");
  } else {
    let ar = area(rad);
    console.log(ar);
  }
  