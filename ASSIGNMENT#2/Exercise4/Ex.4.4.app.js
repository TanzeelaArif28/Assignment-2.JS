const randomValue = Math.floor(Math.random() * 6) ;
const userQuestion = prompt("Ask the Magic 8-Ball a question:");
let response;
switch (randomValue) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "Reply hazy, try again.";
        break;
    case 2:
        response = "Don't count on it.";
        break;
    case 3:
        response = "Outlook not so good.";
        break;
    case 4:
        response = "Signs point to yes.";
        break;
    case 5:
        response = "Cannot predict now.";
        break;
    default:
        response = "Sorry, something went wrong.";
}
const finalResponse = `You asked: ${userQuestion}\nMagic 8-Ball says: ${response}`;
console.log(finalResponse);
