const student ={
    firstname : "Harshraj",
    phone: "22BCE2238",
    address: {
        permanent : "Ahmedabad",
        temporary : "Vellore",
    }

}
console.log(student["address"]["permanent"]);
console.log(student.address.permanent);
console.log("for loop :");
for(let x in student.address){
    console.log(student.address[x]);
}
console.log("using . and []: "+student.address["permanent"]);

