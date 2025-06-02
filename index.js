let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

function getHumanChoice(x){
    if (x === 1) return 'rock';
    if (x === 2) return 'paper';
    return 'scissors';
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(computer, player) {
    if (computer === player) {
        return `It's a tie! Both chose ${player}.`;
    } else if (
        (computer === 'rock' && player === 'scissors') ||
        (computer === 'paper' && player === 'rock') ||
        (computer === 'scissors' && player === 'paper')
    ) {
        computerScore++;
        return `Computer wins this round! ${computer} beats ${player}.`;
    } else {
        playerScore++;
        return `You win this round! ${player} beats ${computer}.`;
    }
}

function playGame(playerChoice) {
    computerChoice = getComputerChoice();
    const result = playRound(computerChoice, playerChoice);
    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    
}