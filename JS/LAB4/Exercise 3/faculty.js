const faculty = {
    name: "Harshraj",
    department: "Computer Science",
    designation: "Professor",
    experience: 10
};
console.log();
for (let key in faculty) {
    console.log(`${key}: ${faculty[key]}`);
}
