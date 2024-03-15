
const x = [
    { firstname: "Satish", address: "Vellore", gender: "Male" },
    { firstname: "Ram", address: "Chennai", gender: "Male" },
    { firstname: "Harini", address: "Chennai", gender: "Female" },
    { firstname: "Mathew", address: "Vellore", gender: "Male" },
    { firstname: "Sandhya", address: "Vellore", gender: "Female" }
];
function add(arr) {
    function match(person) {
      return person.address === "Chennai";
    }
    const y = arr.filter(match);
    y.forEach(person => {
      console.log("Firstname: "+person.firstname+", "+"Gender: "+person.gender);
    });
  
    return y;
  }
  
  const q = add(x);
  