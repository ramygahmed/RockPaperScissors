let choices = ['rock', 'paper', 'scissors'];
function computerPlay(){
    return choices[Math.floor(Math.random()*2)];
}
let playerScore = 0;
let computerScore = 0;
let result = document.getElementById("Result");
let score = document.getElementById("Score");
let playerSelection = "Please select a choice from the above";
const compSelection=document.getElementById("CompSelection");


document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON"){
        if (playerScore <= 4 && computerScore <= 4){
        playerSelection = e.target.textContent
        result.textContent = playRound();
        }else{
            if(playerScore > computerScore){result.textContent = "You won the game"}
            else{result.textContent = "You lost the game"};
        }
    }
})

function playRound(){
    compSelection.textContent = computerPlay();
    computerSelection = compSelection.textContent;
    document.getElementById("playSelection").textContent = playerSelection;
    let winner = '';
    switch (playerSelection) {
        case "rock":
            if(computerSelection == "rock"){winner='Tie'}
            else if (computerSelection == "paper") {winner = 'You Lose'; computerScore++}
            else {winner = 'You Win'; playerScore++}
            break;
        case "paper":
            if(computerSelection == "rock"){winner='You Win'; playerScore++}
            else if (computerSelection == "paper") {winner = 'Tie'}
            else {winner = 'You Lose'; computerScore++}
            break;
        case "scissors":
            if(computerSelection == "rock"){winner='You Lose'; computerScore++}
            else if (computerSelection == "paper") {winner = 'You Win'; playerScore++}
            else {winner = 'Tie'}
            break;

        default:
            break;
    }
    score.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
    return winner;
}


//console.log(game());
