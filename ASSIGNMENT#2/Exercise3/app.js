// Manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);

// Company product catalog
var inventory = [];
var item1 = {
  name: "Laptop",
  model: "ABC123",
  cost: 800,
  quantity: 10,
};
var item2 = {
  name: "Smartphone",
  model: "XYZ456",
  cost: 500,
  quantity: 20,
};
var item3 = {
  name: "Tablet",
  model: "PQR789",
  cost: 300,
  quantity: 15,
};
inventory.push(item1, item2, item3);
var thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item: " + thirdItemQuantity);
var item4 = {
  name: "Headphones",
  model: "HD001",
  cost: 50,
  quantity: 30,
};
inventory.push(item4);
var item5 = {
  name: "Keyboard",
  model: "K123",
  cost: 40,
  quantity: 25,
};
inventory.push(item5);
console.log("Inventory:", inventory);

