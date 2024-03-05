const prompt = require("prompt-sync")();
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  let yearInput = prompt("Enter a year:");
  let year = parseInt(yearInput);
  
  if (isNaN(year)) {
    console.log("Please enter a valid year.");
  } else {
    if (isLeapYear(year)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
  