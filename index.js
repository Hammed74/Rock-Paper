const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameText = document.querySelector(".verdict");
const userSelection = document.querySelector(".user-choice");
const cpuSelection = document.querySelector(".computer-choice");
const gameResults = document.querySelector(".game-results");

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

rock.addEventListener("click", function () {
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
});

paper.addEventListener("click", function () {
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
});
scissors.addEventListener("click", function () {
  let computerHand = getComputerChoice();
  let verdict = playRoundScissors(computerHand);
  userSelection.textContent = "You chose: Scissors";
  cpuSelection.textContent = `Computer chose: ${computerHand}`;
  gameText.textContent = verdict;
  gameText.textContent = verdict;
  userSelection.remove();
  cpuSelection.remove();
  gameText.remove();
  gameResults.appendChild(userSelection);
  gameResults.appendChild(cpuSelection);
  document.body.appendChild(gameText);
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
