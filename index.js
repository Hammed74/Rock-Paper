const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const gameText = document.querySelector(".verdict")

document.body.appendChild(gameText);


function getComputerChoice(){
    let computerChoice = (Math.random() * 10);
    if (computerChoice <= 3.33){
        return "rock";
       } else if (computerChoice > 3.33 && computerChoice <= 6.66){
        return "scissors";
      } else {
        return "paper";
       }

}
rock.addEventListener("click", function(){
    let verdict = playRoundRock();
    gameText.textContent = verdict;
});
paper.addEventListener("click", function(){
    let verdict = playRoundPaper();
    gameText.textContent = verdict;
});
scissors.addEventListener("click", function(){
    let verdict = playRoundScissors();
    gameText.textContent = verdict;
});


function playRoundRock(){
let userChoice = "rock";
let computerHand = getComputerChoice();
if (userChoice == computerHand){
    return "Draw!";
} else if ((userChoice === "rock") && (computerHand === "scissors")){
        return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
} else if ((userChoice === "rock") && (computerHand === "paper")){
        return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
} else if ((userChoice === "paper") && (computerHand === "rock")){
        return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
} else if ((userChoice === "paper") && (computerHand === "scissors")){
        return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
} else if ((userChoice === "scissors") && (computerHand === "paper")){
        return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
} else if ((userChoice === "scissors") && (computerHand === "rock")){
        return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
} 
}

function playRoundPaper(){
    let userChoice = "paper";
    let computerHand = getComputerChoice();
    if (userChoice == computerHand){
        return "Draw!"
    } else if ((userChoice === "rock") && (computerHand === "scissors")){
            return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
    } else if ((userChoice === "rock") && (computerHand === "paper")){
            return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
    } else if ((userChoice === "paper") && (computerHand === "rock")){
            return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
    } else if ((userChoice === "paper") && (computerHand === "scissors")){
            return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
    } else if ((userChoice === "scissors") && (computerHand === "paper")){
            return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
    } else if ((userChoice === "scissors") && (computerHand === "rock")){
            return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
    } 
    }

    function playRoundScissors(){
        let userChoice = "scissors";
        let computerHand = getComputerChoice();
        if (userChoice == computerHand){
            return "Draw!"
        } else if ((userChoice === "rock") && (computerHand === "scissors")){
                return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
        } else if ((userChoice === "rock") && (computerHand === "paper")){
                return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
        } else if ((userChoice === "paper") && (computerHand === "rock")){
                return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
        } else if ((userChoice === "paper") && (computerHand === "scissors")){
                return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
        } else if ((userChoice === "scissors") && (computerHand === "paper")){
                return "Congrats! You win, " + userChoice + " beats " + computerHand + "!"
        } else if ((userChoice === "scissors") && (computerHand === "rock")){
                return "Sorry! You lose, " + computerHand + " beats " + userChoice + "!"
        } 
        }
        

function game(rounds, playerWins = 0, computerWins = 0){
if (rounds > 0){
let result = playRound();
return result;

if (result.includes("You win")) {
    playerWins++;
} else if (result.includes("You lose")){
    computerWins++;
}

game(rounds - 1, playerWins, computerWins);
} else {
if (playerWins > computerWins) {
    return "You win the game!";
 } else if (playerWins < computerWins){
    return "Computer wins the game!";
} else {
    return "It's a draw!"
}
}
}