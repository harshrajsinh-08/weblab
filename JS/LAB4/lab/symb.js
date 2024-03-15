//symbol is used for generating a unique value
//symbols can have a description

let x = Symbol("id"); //new Symbol() will give error
console.log(typeof (x));

let y = Symbol("id");
if (x == y) { console.log("equal"); }
else { console.log("not equal"); }
console.log(x.description);

{
    let mysymbol = Symbol();
    const student = {
        [mysymbol]: "ATMPIN IS 0000",
        firstname: "Harshraj",
        address: "Vellore",
    }
    console.log("accessing mysymbol: " + student[mysymbol]);
    console.log();
    console.log("using for loop: ");
    for (let x in student) {
        console.log(student[x]);
    }
    console.log();
}

{
    console.log("exception when symbols are equal: ");
    let x = Symbol.for("id");
    let y = Symbol.for("id");
    if(x==y){
        console.log("the symbols are equal");
    }

    console.log(Symbol.keyFor(x));
}