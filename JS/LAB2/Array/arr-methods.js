//Array methods

let subjects = ["java", "os", "python"];
for (i in subjects) {
    console.log(subjects[i]);
}
//LENGTH
console.log(subjects.length);

//toString
let res = subjects.toString();
console.log(res);


//PUSH POP
subjects.push("PUSHED");
console.log(subjects);
console.log(subjects.pop());

//JOIN
let x = subjects.join("|");
console.log(x);

console.log("\n");

//SHift and Unshift  QUEUE can be made using PUSH POP SHIFT UNSHIFT 
subjects.shift();
console.log(subjects);

subjects.unshift("UNSHIFT");
console.log(subjects);

//CONCAT
{
    const s = ["java", "os", "python"];
    const u1 = ["t1", "t2"];
    const u2 = ["t11", "t22"];
    const result = s.concat(u1, u2);
    console.log(result);
}


