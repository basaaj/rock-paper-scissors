function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let win = 'You won! ' + playerSelection + ' beats ' + computerSelection;
    let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    let playerWins;

    if (playerSelection == computerSelection) {
        console.log('A tie! You both picked ' + playerSelection);
        return playRound(playerSelection, getComputerChoice());
    }

    else {
        if (playerSelection == 'rock') {
            playerWins = computerSelection == 'scissors' ? true : false;
        }

        else if (playerSelection == 'scissors') {
            playerWins = computerSelection == 'paper' ? true : false;
        }

        else if (playerSelection == 'paper') {
            playerWins = computerSelection == 'rock' ? true : false;
        }

        playerWins ? console.log(win) : console.log(lose);
    }

    return playerWins;
}

const playerChoice = 'rock';
const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);