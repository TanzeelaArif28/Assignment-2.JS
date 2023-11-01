// Evaluating a number game
const dynamicNumber = 3; 
let Input = prompt("Enter a number:");
let userNumber = parseFloat(userInput);
if (userNumber > dynamicNumber) {
    console.log("Your number is greater than the dynamic number.");
} else if (userNumber === dynamicNumber) {
    console.log("Your number is equal to the dynamic number.");
} else if (userNumber < dynamicNumber) {
    console.log("Your number is less than the dynamic number.");
} else {
    console.log("Invalid input. Please enter a valid number.");
}

// Friend checker game
let userName = prompt("Enter a name:");
switch (userName) {
    case "Habiba":
        console.log("You are a friend!");
        break;
    case "Amna":
        console.log("You are a friend!");
        break;
    case "Wajiha":
        console.log("You are a friend!");
        break;
    default:
        console.log("I don't know you. Are you a friend?");
        break;
}

// Rock Paper Scissors game
const choices = ["Rock", "Paper", "Scissors"];
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);
const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];
let resultMessage = "Player chose " + playerChoice + ". Computer chose " + computerChoice + ".\n";
if (playerChoice === computerChoice) {
  resultMessage += "It's a tie!";
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Paper" && computerChoice === "Rock") ||
  (playerChoice === "Scissors" && computerChoice === "Paper")
) {
  resultMessage += "Player wins!";
} else {
  resultMessage += "Computer wins!";
}
console.log(resultMessage);
