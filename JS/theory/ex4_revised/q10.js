const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male", car: { year: "2022", Brand: "Kia", model: "Seltos" } },
    { firstname: "Ram", address: "Chennai", gender: "Male", car: { year: "2019", Brand: "Hyundai", model: "Verna" } },
    { firstname: "Harini", address: "Chennai", gender: "Female", car: { year: "2015", Brand: "Honda", model: "City" } }
];

function comp(a, b) {
    const fa = a.firstname;
    const fb = b.firstname;
    return fa.localeCompare(fb);
}
let y = x.sort(comp);
for (const i of y) {
    console.log(i);
}
