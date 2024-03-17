function display(s){
    console.log(s);
}
function test(callback,x,y){
    let sum = x+y;
    callback(sum);
}
test(display,3,2);
