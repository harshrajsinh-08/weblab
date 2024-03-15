const faculty = {
    name: "Harshajsinh Zala",
    department: "Computer Science",
    designation: "Professor",
    experience: 10,
    courses: [
        { course: "Introduction to Programming", semester: "Fall", slot: "A1" },
        { course: "Java", semester: "Spring", slot: "A2" },
        { course: "Web Development", semester: "Winter", slot: "B1" },
        {course : "DBMS",semester:"summer",slot:"B2"},
    ]
};

console.log("Course taught in slot A2:");
faculty.courses.forEach(course => {
    if (course.slot === "A2") {
        console.log(course.course);
    }
});

console.log("\nAll courses taught: ");
faculty.courses.forEach(course => {
    console.log(course.course);
});
console.log("\nin Winter semester:");
faculty.courses.forEach(course => {
    if (course.semester === "Winter") {
        console.log(`Faculty: ${faculty.name}, course: ${course.course}`);
    }
});
