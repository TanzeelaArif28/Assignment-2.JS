var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue",
    isAutomatic: true,
  };
  var propertyName = "color";
  myCar[propertyName] = "Red";

  var newPropertyName = "forSale";
  myCar[newPropertyName] = true;
  console.log("Make: " + myCar.make);
  console.log("Model: " + myCar.model);
  console.log("For Sale: " + myCar.forSale);
  