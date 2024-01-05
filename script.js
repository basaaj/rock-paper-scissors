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

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock paper scissors! Which one will you choose?");

        let currRound = playRound(playerChoice, getComputerChoice());
        currRound ? playerWins++ : computerWins++;
        console.log("Player: " + playerWins + " | Computer: " + computerWins);

        if (playerWins == 3 || computerWins == 3) {
            break;
        }
    }

    playerWins > computerWins ? console.log("Congrats, you won!") : console.log("Sorry, you lost.");
}

game();