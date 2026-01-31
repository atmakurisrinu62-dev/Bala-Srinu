let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
}
function computer() {
  const number = Math.random();
  let computerGuess = "";
  if (number >= 0 && number < 1 / 3) {
    computerGuess = "Rock";
  } else if (number >= 1 / 3 && number < 2 / 3) {
    computerGuess = "Paper";
  } else if (number >= 2 / 3 && number < 1) {
    computerGuess = "Scissor";
  }
  return computerGuess;
}
function playMove(value) {
  const computerGuess = computer();
  let result = " ";

  if (value === "Rock") {
    if (computerGuess === "Rock") {
      result = " You Tie";
    } else if (computerGuess === "Paper") {
      result = "You Loss";
    } else if (computerGuess === "Scissor") {
      result = "You Win";
    }
  } else if (value === "Paper") {
    if (computerGuess === "Rock") {
      result = "You Win";
    } else if (computerGuess === "Paper") {
      result = "You Tie";
    } else if (computerGuess === "Scissor") {
      result = "You Loss";
    }
  } else if (value === "Scissor") {
    if (computerGuess === "Rock") {
      result = "You Loss";
    } else if (computerGuess === "Paper") {
      result = "You Win";
    } else if (computerGuess === "Scissor") {
      result = "You Tie";
    }
  }
  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Loss") {
    score.losses += 1;
  } else if (result === "You Tie") {
    score.Ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  const element = document.querySelector(".para1");
  element.innerHTML = ` You Picked ${value} computer Picked ${computerGuess} `;

  const result1 = document.querySelector(".para3");
  result1.innerHTML = `${result}`;
  const element2 = document.querySelector(".para2");
  element2.innerHTML = ` Wins=${score.wins}  Losses=${score.losses}  Ties=${score.Ties}`;
}
let button1 = document.querySelector(".btn1");
button1.addEventListener("click", () => {
  computer();
  playMove("Rock");
});
let button2 = document.querySelector(".btn2");
button2.addEventListener("click", () => {
  computer();
  playMove("Paper");
});
let button3 = document.querySelector(".btn3");
button3.addEventListener("click", () => {
  computer();
  playMove("Scissor");
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  score.wins = 0;
  score.losses = 0;
  score.Ties = 0;
  localStorage.removeItem("score");
});
