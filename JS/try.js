const prompt = require('prompt-sync')()
let x=12;
console.log("x is "+x);

let y=Math.sqrt(-1);
console.log("y is "+y);

let i = Infinity/Infinity;
console.log(i);

let z=7*NaN;
console.log("z is "+z);

if(7>NaN){
    console.log("TRUE");
}
else{
    console.log("Relation Operators with NaN are always FALSE");
}

if(NaN == NaN){
    console.log("nan == nan are always equal")
}
else{
    console.log("nan == nan are always unequal")
}

if(NaN != NaN){
    console.log("they are equal")
}
else{
    console.log("nan == nan are always unequal")
}