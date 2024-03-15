const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
  ];
  
  function fnc(arr, cp) {
    if (cp.firstname) {
      arr.push(cp.firstname);
    }
    return arr;
  }
  
  const y = x.reduce(fnc, []);
  
  const p = y.join('');
  
  console.log(p);
  