const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameText = document.querySelector(".verdict");
const userSelection = document.querySelector(".user-choice");
const cpuSelection = document.querySelector(".computer-choice");
const gameResults = document.querySelector(".game-results");
const startVerdict = document.querySelector(".startVerdict");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const scores = document.querySelector(".scores");
const pScores = document.querySelector(".p-scores");
const cScores = document.querySelector(".c-scores");
const pText = document.querySelector(".p-text");
const cText = document.querySelector(".c-text");

document.body.appendChild(gameText);

function getComputerChoice() {
  let computerChoice = Math.random() * 10;
  if (computerChoice <= 3.33) {
    return "Rock";
  } else if (computerChoice > 3.33 && computerChoice <= 6.66) {
    return "Scissors";
  } else {
    return "Paper";
  }
}
let playerWins = 0;
let computerWins = 0;
rock.addEventListener("click", function () {
  startVerdict.remove();
  let computerHand = getComputerChoice();
  let verdict = playRoundRock(computerHand);
  userSelection.textContent = "You chose: Rock";
  cpuSelection.textContent = `Computer chose: ${computerHand}`;
  gameText.textContent = verdict;
  userSelection.remove();
  cpuSelection.remove();
  gameText.remove();
  gameResults.appendChild(userSelection);
  gameResults.appendChild(cpuSelection);
  document.body.appendChild(gameText);
  pText.textContent = "Your Score:";
  cText.textContent = "Computer Score:";
  pScores.appendChild(pText);
  pScores.appendChild(playerScore);
  cScores.appendChild(cText);
  cScores.appendChild(computerScore);
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;

  if (verdict == "YOU WIN!") {
    playerWins++;
  } else if (verdict == "YOU LOSE!") {
    computerWins++;
  }

  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
});

paper.addEventListener("click", function () {
  startVerdict.remove();
  let computerHand = getComputerChoice();
  let verdict = playRoundPaper(computerHand);
  userSelection.textContent = "You chose: Paper";
  cpuSelection.textContent = `Computer chose: ${computerHand}`;
  gameText.textContent = verdict;
  gameText.textContent = verdict;
  userSelection.remove();
  cpuSelection.remove();
  gameText.remove();
  gameResults.appendChild(userSelection);
  gameResults.appendChild(cpuSelection);
  document.body.appendChild(gameText);
  pText.textContent = "Your Score:";
  cText.textContent = "Computer Score:";
  playerScore.textContent = playerWins;
  pScores.appendChild(pText);
  pScores.appendChild(playerScore);
  cScores.appendChild(cText);
  cScores.appendChild(computerScore);

  if (verdict == "YOU WIN!") {
    playerWins++;
  } else if (verdict == "YOU LOSE!") {
    computerWins++;
  }

  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
});

scissors.addEventListener("click", function () {
  startVerdict.remove();
  let computerHand = getComputerChoice();
  let verdict = playRoundScissors(computerHand);
  userSelection.textContent = "You chose: Scissors";
  cpuSelection.textContent = `Computer chose: ${computerHand}`;
  gameText.textContent = verdict;
  userSelection.remove();
  cpuSelection.remove();
  gameText.remove();
  gameResults.appendChild(userSelection);
  gameResults.appendChild(cpuSelection);
  document.body.appendChild(gameText);
  pText.textContent = "Your Score:";
  cText.textContent = "Computer Score:";
  playerScore.textContent = playerWins;
  pScores.appendChild(pText);
  pScores.appendChild(playerScore);
  cScores.appendChild(cText);
  cScores.appendChild(computerScore);


 
        if (verdict == "YOU WIN!") {
    gameText.textContent = verdict;
    playerWins++;
  } else if (verdict == "YOU LOSE!") {
    gameText.textContent = verdict;
    computerWins++;
  }

  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
});

function playRoundRock(computerHand) {
  let userChoice = "Rock";
  if (userChoice == computerHand) {
    return "Draw!";
  } else if (userChoice === "Rock" && computerHand === "Scissors") {
    return "YOU WIN!";
  } else if (userChoice === "Rock" && computerHand === "Paper") {
    return "YOU LOSE!";
  } else if (userChoice === "Paper" && computerHand === "Rock") {
    return "YOU WIN!";
  } else if (userChoice === "Paper" && computerHand === "Scissors") {
    return "YOU LOSE!";
  } else if (userChoice === "Scissors" && computerHand === "Paper") {
    return "YOU WIN!";
  } else if (userChoice === "Scissors" && computerHand === "Rock") {
    return "YOU LOSE!";
  }
}

function playRoundPaper(computerHand) {
  let userChoice = "Paper";
  if (userChoice == computerHand) {
    return "Draw!";
  } else if (userChoice === "Rock" && computerHand === "Scissors") {
    return "YOU WIN!";
  } else if (userChoice === "Rock" && computerHand === "Paper") {
    return "YOU LOSE!";
  } else if (userChoice === "Paper" && computerHand === "Rock") {
    return "YOU WIN!";
  } else if (userChoice === "Paper" && computerHand === "Scissors") {
    return "YOU LOSE!";
  } else if (userChoice === "Scissors" && computerHand === "Paper") {
    return "YOU WIN!";
  } else if (userChoice === "Scissors" && computerHand === "Rock") {
    return "YOU LOSE!";
  }
}

function playRoundScissors(computerHand) {
  let userChoice = "Scissors";
        if (userChoice == computerHand) {
    return "Draw!";
  } else if (userChoice === "Rock" && computerHand === "Scissors") {
    return "YOU WIN!";
  } else if (userChoice === "Rock" && computerHand === "Paper") {
    return "YOU LOSE!";
  } else if (userChoice === "Paper" && computerHand === "Rock") {
    return "YOU WIN!";
  } else if (userChoice === "Paper" && computerHand === "Scissors") {
    return "YOU LOSE!";
  } else if (userChoice === "Scissors" && computerHand === "Paper") {
    return "YOU WIN!";
  } else if (userChoice === "Scissors" && computerHand === "Rock") {
    return "YOU LOSE!";
  }
}

/*function game(rounds, playerWins = 0, computerWins = 0) {
  if (rounds > 0) {
    let result = playRound();
    return result;

    if (result.includes("You win")) {
      playerWins++;
    } else if (result.includes("You lose")) {
      computerWins++;
    }

    game(rounds - 1, playerWins, computerWins);
  } else {
    if (playerWins > computerWins) {
      return "You win the game!";
    } else if (playerWins < computerWins) {
      return "Computer wins the game!";
    } else {
      return "It's a draw!";
    }
  }
}*/
