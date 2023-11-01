var shoppingList = [];
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");
var indexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");
}
var lastItem = shoppingList.pop();
console.log("Removed item: " + lastItem);
shoppingList.sort();
var indexOfMilk = shoppingList.indexOf("Milk");
console.log("Index of 'Milk': " + indexOfMilk);

var indexOfBananas = shoppingList.indexOf("Bananas");
if (indexOfBananas !== -1) {
  shoppingList.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
}
var newList = ["Juice", "Pop"];
shoppingList = shoppingList.concat(newList, newList);
var lastIndexOfPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of 'Pop': " + lastIndexOfPop);
console.log("Final shopping list: " + shoppingList);
