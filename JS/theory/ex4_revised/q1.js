
const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
];
function filterfunc(arr) {
    function chen(p) {
        return p.address == "Chennai";
    }
    return arr.filter(chen);
}
const y = filterfunc(x);

console.log(y);
