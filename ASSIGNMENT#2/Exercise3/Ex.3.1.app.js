
var  shoppingList = ["Milk", "Bread", "Apples"];
console.log("List length: " + shoppingList.length);
var indexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList[indexOfBread] = "Bananas";
}
console.log("Updated shopping list: " + shoppingList);






