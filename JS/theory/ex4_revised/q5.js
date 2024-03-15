const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" },
    { address: "Vellore", gender: "Female" }
  ];
  
  function fname(t) {
    return typeof t.firstname != 'undefined';
  }
  
  const somefunct = x.some(fname);
  console.log(somefunct);
  