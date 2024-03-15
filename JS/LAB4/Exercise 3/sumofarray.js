console.log("\nReduce function");
const x = [4, 10, 5, 8, 6];
let res = x.reduce(sumfunction, 100);
function sumfunction(total, value, index, array) {
    return total += value
}
console.log(res);