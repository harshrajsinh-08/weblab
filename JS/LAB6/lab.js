// const myfunct = function(x,y){
//     console.log("this is a function");
//     return x+y;
// }
// let x = myfunct(3,4);
// console.log(`The sum of the two numbers is ${x}`);
// const test = myfunct;
// let y = test(4,5);
// console.log(`The sum of the two numbers is ${y}`);



// {
//     test();
//     // function expression
//     const test = function(){
//         console.log("this is a function expression ");
//     }

// }


// {

//     const x = [1, 2, 3, 4, 5, 6];
//     const res = x.filter(function (value) {
//         return value > 3;
//     });
//     console.log(res);

// }


function testfunc(){
    console.log("This is a normal function");
}

testfunc();
const test = (x,y)=>console.log(x+y);
test(3,4);
{
    const test = x =>{return x;}
    let res = test(3);
    console.log(res);
}

{
    const x = [2,3,4,5,6,8];
    const res = x.filter((val)=> {return val>3});
    console.log(res);
}