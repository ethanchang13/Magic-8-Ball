// Get user name
let userName = prompt("Hello, what is your name?");
let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let greeting = document.getElementById("greeting");

// Input user name to website
userName
  ? (greeting.innerText = `Hello, ${userName}!`)
  : (greeting.innerText = "Hello Stranger!");

function shakeMagic8Ball() {
  // Get user question
  let userQuestion = prompt("What do you want to ask the 8 Ball?");
  if (!userQuestion) {
    alert("Please ask a question.");
    return;
  }

  // Add shaking animation
  responseImg.classList.add("shake");

  // Remove shaking animation after it finishes
  setTimeout(() => {
    responseImg.classList.remove("shake");
  }, 500);

  // DO NOT TOUCH THIS CODE!
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  let imageChoice = "";
  let imagePath = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      imagePath = "imgs/It is certain.gif";
      break;
    case 1:
      eightBall = "It is decidedly so";
      imagePath = "imgs/It is decidedly so.gif";
      break;
    case 2:
      eightBall = "Reply hazy, try again later";
      imagePath = "imgs/Reply hazy try again later.gif";
      break;
    case 3:
      eightBall = "Cannot predict now";
      imagePath = "imgs/Cannot predict now.gif";
      break;
    case 4:
      eightBall = "Don't count on it";
      imagePath = "imgs/Don't count on it.gif";
      break;
    case 5:
      eightBall = "My sources say no";
      imagePath = "imgs/My sources say no.gif";
      break;
    case 6:
      eightBall = "Outlook not so good";
      imagePath = "imgs/Outlook not so good.gif";
      break;
    case 7:
      eightBall = "As I see it, yes";
      imagePath = "imgs/As I see it yes.gif";
      break;
  }

  //Update image source
  responseImg.src = imagePath;

  // Update the response text
  responseText.innerText = `${userName} has asked "${userQuestion}" to the almighty 8 Ball. The 8 Ball has replied: ${eightBall}`;
}
