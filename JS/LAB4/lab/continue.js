//OBJECTS in js
// a data type 
//obj val pair

{
    const stud = {
        firstname: "Harshraj", address: "Vellore", Reg: "22BCE2238"
    }
    console.log(stud);
}
{
    const stud = {}
    stud.Reg = "22BCE2238";
    stud.firstname = "Harshraj";
    stud.address = "Vellore";
    console.log("using for in:");
    for(let x in stud){
        console.log(stud[x]);
    }
    console.log("normally :");
    console.log(stud);
    console.log();
}

{
    console.log("using new Object()");
    const student = new Object();
    student.Reg = "22BCE8350";
    student.firstname = "Sanch";
    student.address = "Vellore";
    console.log(student);
    console.log(student.Reg);

}

{
    const stud = {};
    stud.Reg = "22BCE2238";
    stud.firstname = "Harshraj";
    stud.address = "Vellore";
    stud.phone = "75757575";
    delete stud.phone;
    console.log(stud);
}