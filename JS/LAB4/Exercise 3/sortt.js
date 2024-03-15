console.log("numeric sort using function");
const x = [78, 66, 12, 44, 13, 876, 988, 34];
x.sort(mysortde)
function mysortde(x, y) {
    return y - x;
}
console.log(x);