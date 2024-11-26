//Get user name
let userName = prompt("Hello, what is your name?");
let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let greeting = document.getElementById("greeting");
//Input user name to website
userName
  ? (greeting.innerText = `Hello, ${userName}!`)
  : (greeting.innerText = "Hello Stranger!");

function shakeMagic8Ball() {
  //Get user question
  let userQuestion = prompt("What do you want to ask the 8 Ball?");

  //DO NOT TOUCH THIS CODE!
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  let imageChoice = "";
  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
  }
  console.log(`Magic Eight Ball: ${eightBall}`);

  responseText.innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 Ball has replied ${eightBall}!`;

  responseImg.src = imageChoice;
}
