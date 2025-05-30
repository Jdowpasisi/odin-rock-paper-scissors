let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choice = document.getElementById("player-choice").value.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(choice)) {
        document.getElementById('output').textContent = 'Invalid choice! Please choose rock, paper, or scissors.';
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
    if (roundCounter >= 5) {
        document.getElementById('output').textContent += `\nGame over! Please refresh to play again.`;
        return;
    }

    const player = getHumanChoice();
    if (player === null) return;

    const computer = getComputerChoice();
    const result = playRound(computer, player);
    roundCounter++;

    let message = `Round ${roundCounter} of 5\n${result}\nScore: You ${playerScore} - ${computerScore} Computer`;

    document.getElementById('output').textContent = message;

    if (roundCounter === 5) {
        let finalMessage = `\n\nFinal Result:\n`;
        if (playerScore > computerScore) {
            finalMessage += `You win the game!`;
        } else if (computerScore > playerScore) {
            finalMessage += `Computer wins the game!`;
        } else {
            finalMessage += `The game is a tie!`;
        }

        document.getElementById('output').textContent += finalMessage;
    }
}
