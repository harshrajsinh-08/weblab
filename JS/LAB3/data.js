let x = 10.5;
let n = BigInt(9888888888888888888888);
//string
let k = 'Harsh';
//boolean
let result = true;
//null
let j = null;
if(null){
    console.log("null is true");
}
else{
    console.log("null is always false");
}

{
    console.log("UNDEFINED");
    let x;
    if(x ==undefined){
        console.log("assign some value for x");
    }
    console.log("type of x is "+typeof(x));
    console.log();
}
//obj
{
    console.log("OBJECT :");
    const st = {
        reg:"22BCE2238",address:"vellore",branch:"BCE"
    }
    console.log(st["reg"]);
    console.log("type of student is: "+typeof(st));
    console.log();
}

//Symbol
{
    console.log("Symbol: ");
    let mysymbol = Symbol();
    let mysecsymbol = Symbol();

    if(mysymbol == mysecsymbol){
        console.log("they are equal");
    }
    else{
        console.log("they are not equal");
    }

    const st = {
        [Symbol()]:"22BCE2238",address:"vellore",branch:"BCE"
    }
    for(let j in st){
        console.log(st[j]);
    }
}
