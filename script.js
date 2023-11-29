

function computerSelection()
{
let items = ['rock', 'paper', 'scissors'];
return items[Math.floor(Math.random()*items.length)];

}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

let i = 0;
const play = () => {

function playerSelection()
{
    let playerChoice = prompt('Enter Rock or Paper or Scissors');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}


function playRound(playerSelection, computerSelection) {
    console.log(`player: ${playerSelection} VS  + computer: ${computerSelection}`);

    if (playerSelection === computerSelection) return 'Draw'

    const winPairs = {
        paper: 'rock',
        scissors: 'paper',
        rock: 'scissors'
    }

    if (winPairs[playerSelection] == computerSelection) {
        userScore += 1;
        
       }
       // Player loses
       else if (winPairs[computerSelection] == playerSelection) {
         computerScore += 1;
        
       }
       // Tie
       else {
         displayResult.textContent = "Tie!";
       }
    return winPairs[playerSelection] === computerSelection ? 'Player wins' : 'Computer wins'

  
    };








function game()
 {

}

console.log(playRound(playerSelection(), computerSelection()));

console.log("your score = " + userScore);
console.log("Computer's score = " + computerScore);
i++;
if (i !== 5) {
    play();
} else {
    alert("Game Over=> User("+userScore+") vs Computer("+computerScore+")");
}
}

play();





