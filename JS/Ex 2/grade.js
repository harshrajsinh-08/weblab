const prompt = require('prompt-sync')()
let mark = prompt("Enter the subject mark:");
mark = parseInt(mark);

if (isNaN(mark)) {
    console.log("Invalid mark entry. Please enter a valid number.");
} else {
    let grade;

    if (mark < 40) {
        grade = "F";

    } else if (mark >= 40 && mark <= 60) {
        grade = "E";
    } else if (mark > 60 && mark <= 80) {
        grade = "B";
    } else if (mark > 80 && mark <= 90) {
        grade = "A";
    } else if (mark > 90 && mark <= 100) {
        grade = "S";
    } else {
        grade = "Invalid inp";
    }

    console.log("Grade for the given mark" + mark + " is: " + grade);
}
