const x = [
    {
      firstname: "Satish",
      address: "Vellore",
      gender: "Male",
      car: { year: "2022", Brand: "Kia", model: "Seltos" }
    },
    {
      firstname: "Ram",
      address: "Chennai",
      gender: "Male",
      car: { year: "2019", Brand: "Hyundai", model: "Verna" }
    },
    {
      firstname: "Harini",
      address: "Chennai",
      gender: "Female",
      car: { year: "2015", Brand: "Honda", model: "City" }
    }
  ];
  
  function detail(p) {
    console.log("person: "+p.firstname+", "+"Car Brand: "+p.car.Brand+", "+"Car Model: "+p.car.model);
  }
  
  function ffunct(p) {
    return p.address == "Chennai";
  }
  
  const y = x.filter(ffunct);
  y.forEach(detail);
  