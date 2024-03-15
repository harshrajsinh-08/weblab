const x = [
    {
        firstname: "Satish",
        address: "Vellore",
        gender: "Male",
        car: { year: "2022", Brand: "Kia", model: "Seltos" }
    },
    {
        firstname: "Ram",
        address: "Chennai",
        gender: "Male",
        car: { year: "2019", Brand: "Hyundai", model: "Verna" }
    },
    {
        firstname: "Harini",
        address: "Chennai",
        gender: "Female",
        car: { year: "2015", Brand: "Honda", model: "City" }
    }
];

function reqcar(p) {
    if ((p.car.year) > 2016) {
        return (p.car.year);
    }
}
const y = x.filter(reqcar);
console.log(y);
