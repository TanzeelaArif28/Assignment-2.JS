let userInput = prompt("Set the value for the prize by selecting a number between 0 and 10:");
let prize = parseInt(userInput);
let value = "My Selection: ";
let prizeInfo;
switch (prize) {
    case 0:
        prizeInfo = "You win a trip to the Bahamas!";
        break;
    case 1:
        prizeInfo = "You win a brand new car!";
        break;
    case 2:
    case 3:
        prizeInfo = "You win a $50 gift card.";
        break;
    case 4:
    case 5:
    case 6:
        prizeInfo = "You win a cool T-shirt.";
        break;
    case 7:
    case 8:
    case 9:
        prizeInfo = "You win a coupon for a free coffee.";
        break;
    case 10:
        prizeInfo = "Sorry, no prize this time.";
        break;
    default:
        prizeInfo = "Invalid selection. Please select a number between 0 and 10.";
}
console.log(value + prizeInfo);
