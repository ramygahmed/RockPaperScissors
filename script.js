let choices = ['rock', 'paper', 'scissors'];
function computerPlay(){
    return choices[Math.floor(Math.random()*2)];
}
let playerScore = 0;
let computerScore = 0;
function playRound(){
    computerSelection = computerPlay();
    console.log (`Computer chose: ${computerSelection}`);
    playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    console.log (`You chose: ${playerSelection}`);
    let winner = 'no game';
    switch (playerSelection) {
        case "rock":
            if(computerSelection == "rock"){winner='Tie'}
            else if (computerSelection == "paper") {winner = 'You Lose'}
            else {winner = 'You Win'}
            break;
        case "paper":
            if(computerSelection == "rock"){winner='You Win'}
            else if (computerSelection == "paper") {winner = 'Tie'}
            else {winner = 'You Lose'}
            break;
        case "scissors":
            if(computerSelection == "rock"){winner='You Lose'}
            else if (computerSelection == "paper") {winner = 'You Win'}
            else {winner = 'Tie'}
            break;

        default:
            break;
    }
    return winner;

}
function game(){
    for (let x = 0; x < 5; x++) {
            let winner = playRound();
            if (winner == "You Win") {
                console.log('You Win!')
                playerScore++;
            } 
            else if (winner == "You Lose"){
                console.log('You Lose!')
                computerScore++;
            }else{
                x--;
                console.log('Tie');
            }
    }
    if (playerScore > computerScore) {
        console.log("You win the Game!")
    } else if (computerScore > playerScore) {
        console.log("You lose the Game!")
    }
}
console.log(game());
