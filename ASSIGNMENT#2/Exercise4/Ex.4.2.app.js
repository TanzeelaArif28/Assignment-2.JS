const ageInput = prompt("Please enter your age:");
const age = parseInt(ageInput);
let message;
if (age >= 21) {
  message = "You are allowed entry to the venue and can purchase alcohol.";
} 
else if (age >= 19) {
  message = "You are allowed entry to the venue but cannot purchase alcohol.";
} 
else {
  message = "Sorry, you are denied entry to the venue.";
}
console.log(message);
