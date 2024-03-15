const faculty = {
    firstname : "Satish",
    address : "vellore",
    degrees:[
        {dname: "Btech",university:"Anna"},
        {dname :"Mtech",university:"Madras"},
        {dname: "PHD",university: "IIT"},
    ]
}
console.log(faculty.degrees[0].dname);
    for(let x in faculty .degrees){
        console.log(faculty.degrees[x]);
    }
    for(let x in faculty.degrees){
        console.log(faculty.degrees[x].university);
    }

    for(let x in faculty.degrees){
        if(faculty.degrees[x].university=="Madras"){
            console.log("From madras faculty has done: "+faculty.degrees[x].dname);
        }
    }
