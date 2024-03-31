const sub=['java','TOC','DBMS','OS','CN','DAA','SE','AI','ML','DL']
sub.splice(3,sub.length ,'CO')
console.log(sub);

const x = [2,3,4,5,6,7];
//filter method
//returns an array
const res= x.filter(myfunction);
function myfunction(value,index,arr){
    return value>5;
}
console.log(res);

//map method
//returns an array
const res1=x.map(myfunction1);
function myfunction1(value,index,arr){
    return value*2;
}
console.log(res1);
const ress = sub.filter(myfunc);
function myfunc(value,index,arr){
    return value.includes('java');
}
console.log(ress);
//for each
//does not return anything
// x.forEach(myfunction2);
// function myfunction2(value,index,arr){
//     console.log(value*5);
// }

//map method
//returns an array
// const res2=x.map(myfunction3);
// function myfunction3(value,index,arr){
//     return value*2;
// }

//reduce method
//returns a single value
const res3=x.reduce(myfunction4);
function myfunction4(total,value,index,arr){
    return total+value;
}
console.log(res3);

//every method
//returns a boolean value
const res4=x.every(myfunction5);
function myfunction5(value,index,arr){
    return value>0;
}
console.log(res4);


//sort method
//returns a sorted array
const res5=x.sort(myfunction6);
function myfunction6(a,b){
    return b-a;
}
console.log(res5);