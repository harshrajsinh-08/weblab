const numbers = [2, 4, 6, 8, 9];
const result = numbers.map(odd_even);
function odd_even(value){
    if(value % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(result);
