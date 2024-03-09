//Array methods Session 2
//filter ,map,foreach,some,every,reduce

const x = [2, 2, 4, 6, 7];
const st = ["java", "python", "os", "network"];
//for each value in teh array we will invoke a function 

//Intro to functions
function display(x, y) {
    return x * y;
}
let result = display(3, 2);
console.log(result);

//FILTER Method is used for filtering the values inside the array .... 
//return type is array
console.log("\nFilter method");
console.log(`original array: ${x}`);
console.log(x);
const res = x.filter(filterfunction);
function filterfunction(value, index, array) {
    return value > 2
}
console.log(`Filtering values greater than 2: ${res}`);



const res2 = st.filter(filterfunction2);
function filterfunction2(value) {
    return value.includes("java");
}
console.log(`Filtering values having JAVA: ${res2}`);



//foreach
{
    console.log("for each method");
    const x = [2, 3, 4, 5, 6];
    x.forEach(testfunction);
    function testfunction(value, index, array) {
        console.log(`${value}-->${index}`);
    }
    console.log();
}

//map
{
    console.log("map function");
    const x = [2, 3, 4, 5, 6];
    console.log(`original array : ${x}`);

    const res = x.map(mapfunction);
    function mapfunction(value){
        return value*2;
    }
    console.log(`mapped to *2 : ${res}`);
}


//Reduce : reduce the array to a single value 
{
    console.log("\nReduce function");
    const x = [1,1,1,1,1];
    let res = x.reduce(sumfunction,10);
    function sumfunction(total,value,index,array){
        return total+=value
    }
    console.log(res);
}

//EVERY: when every value in the array satisfies a condition then returns true and false otherwise
{
    const x = [2,9,3,5,6];
    let res = x.every(checkfunc);
    function checkfunc(value,index,array){
        return value>1;
    }
    console.log("every mehthod checking if every val >1: ");
    console.log(res);
}
//some
{
    const x = [2,9,3,5,6];
    let res = x.some(checkfunc);
    function checkfunc(value,index,array){
        return value>50;
    }
    console.log("some method checking if some val>50: ");
    console.log(res);
}

//Sort
{
    const sub = ["cat","jar","orange","Apple"]
    sub.sort();
    console.log(sub);

    //numeric sort doesnt work with .sort make a function to make it work
    console.log("numeric sort using function");
    const x = [56,33,21,456,723,44]
    x.sort(mysort)
    function mysort(x,y){
        return x-y;
    }
    console.log(x);

    x.sort(mysortde)
    function mysortde(x,y){
        return y-x;
    }
    console.log(x);

    //or use reverse
    console.log("reversing using .reverse():");
    x.reverse();
    console.log(x);
}

