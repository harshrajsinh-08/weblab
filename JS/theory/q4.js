const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
];

function fname(obj) {
    return typeof obj.firstname != 'undefined';
}

const y = x.every(fname);
console.log(y);
