const symb = Symbol("mySymbol");
const myobj = {
    [symb]: "Harshraj",
    reg: "22BCE2238"
};
for (let key in myobj) {
    console.log(`${key}: ${myobj[key]}`);
}
const symbolval = myobj[symb];
console.log(symbolval);
