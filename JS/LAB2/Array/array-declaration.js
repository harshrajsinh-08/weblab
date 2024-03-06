const prompt = require('prompt-sync')()
//declaration of arrays using const
//cannot redeclare or reinitialise
const subjects = ["java","python","DAA","OS"];
{
    const subjects= ["java","python","DAA","OS"];
    console.log(subjects[0]);
}
console.log(subjects[1]);

//also declaring and assigning should be done at the same time
// const sub;
// sub= ["java","python","DAA","OS"];           // NOT ALLOWED


//method 2 to declare array
const sub = [];
sub[0] = "java";
sub[1] = "s1";
console.log(sub[1]);

//method 3
const s = new Array("szero","sone","stwo");
console.log(typeof(s));

//method to check if an array
if(Array.isArray(sub)){
    console.log("ITs an Array using instance of Array.isArray ");
}
else{
    console.log("not an array");
}

//method 2 to check if an array
if(sub instanceof Array){
    console.log("ITs an Array using instance of");
}
else{
    console.log("not an array");
}