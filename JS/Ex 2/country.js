const prompt = require('prompt-sync')()

var country = prompt("Enter a country name:");
country = country.toLowerCase();
var capital;

switch (country) {
  case "germany":
    capital = "Berlin";
    break;
  case "uk":
    capital = "London";
    break;
  case "pakistan":
    capital = "Islamabad";
    break;
  default:
    capital = "Wrong Input";
}

console.log("The capital of " + country.toUpperCase() + " is " + capital);