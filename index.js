let max = parseInt(prompt("Enter a maximum number!😜"));
while (!max) {
  max = parseInt(prompt("Enter a valid number!😊"));
}

const genNumber = Math.floor(Math.random() * max) + 1;

let guess = parseInt(
  prompt(`I chose a number between 1 and ${max}. Can you guess what it is?`)
);

let attempts = 1;

while (parseInt(guess) !== genNumber) {
  if (guess === "q") break;
  attempts++;
  if (guess > genNumber) {
    guess = prompt(`Too high! Guess again! Remember, between 1 and ${max}`);
  } else if (guess < genNumber) {
    guess = prompt(`Too low! Guess again! Remember, between 1 and ${max}`);
  }
}
if (guess == "q") {
  alert(
    `Thanks for playing! You guessed ${attempts} times. Refresh the browser if you want to start again.`
  );
} else {
  alert(
    `You guessed it! It only took you ${attempts} guesses. 👏👏👏 Refresh the browser to play again!`
  );
}
