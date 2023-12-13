function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();
    let win = 'You won!' + playerSelection + 'beats ' + computerSelection;
    let lose = 'You lose!' + computerSelection + 'beats ' + playerSelection;
    let result;

    if (playerSelection == computerSelection) {
        playRound(playerSelection, getComputerSelection());
    }

    else {
        if (playerSelection == 'rock') {
            result = computerSelection == 'scissors' ? win : lose;
        }

        else if (playerSelection == 'scissors') {
            result = computerSelection == 'paper' ? win : lose;
        }

        else if (playerSelection == 'paper') {
            result = computerSelection == 'rock' ? win : lose;
        }
    }

    return result;
}