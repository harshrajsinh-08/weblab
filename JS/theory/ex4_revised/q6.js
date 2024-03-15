const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
  ];
  
  let male = 0;
  let female = 0;
  
  for (let i of x) {
    if (i.gender == 'Male') {
      male++;
    } else if (i.gender == 'Female') {
      female++;
    }
  }
  
  console.log('Male:', male);
  console.log('Female:', female);
  