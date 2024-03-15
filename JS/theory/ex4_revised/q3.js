const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
  ];
  
  function defined(o) {
    return typeof o.firstname !== 'undefined';
  }
  
  function display(y) {
    for (let i = 0; i < y.length; i++) {
      if (defined(y[i])) {
        console.log(y[i].firstname);
      }
    }
  }
  
  display(x);
  