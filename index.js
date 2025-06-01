let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(choice)) {
        console.log('Invalid choice! Please choose rock, paper, or scissors.');
        return null;
    }
    return choice;
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

function playGame() {
    while (roundCounter < 5) {
        const player = getHumanChoice();
        if (player === null) continue;

        const computer = getComputerChoice();
        const result = playRound(computer, player);
        roundCounter++;

        console.log(`\nRound ${roundCounter} of 5`);
        console.log(result);
        console.log(`Score: You ${playerScore} - ${computerScore} Computer`);
    }

    console.log(`\nFinal Result:`);
    if (playerScore > computerScore) {
        console.log(`You win the game!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins the game!`);
    } else {
        console.log(`The game is a tie!`);
    }
}

playGame();
