function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = 'lose';

    if (playerSelection === computerSelection) {
        displayResult('A tie! You both picked ' + playerSelection);
    }

    else {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            result = 'win';
        }

        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            result = 'win';
        }

        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            result = 'win';
        }

        result == 'win' ? displayResult('You won! ' + playerSelection + ' beats ' + computerSelection) 
                        : displayResult('You lose! ' + computerSelection + ' beats ' + playerSelection);
    }

    return result;
}

// function game() {
//     let playerWins = 0;
//     let computerWins = 0;

//     for (i = 0; i < 5; i++) {
//         let playerChoice = prompt("Rock paper scissors! Which one will you choose?");

//         let currRound = playRound(playerChoice, getComputerChoice());
//         currRound ? playerWins++ : computerWins++;
//         console.log("Player: " + playerWins + " | Computer: " + computerWins);

//         if (playerWins == 3 || computerWins == 3) {
//             break;
//         }
//     }

//     playerWins > computerWins ? console.log("Congrats, you won!") : console.log("Sorry, you lost.");
// }

// game();

const choices = document.querySelectorAll('button');
const resultDiv = document.querySelector('div');
const playerScore = 0;
const computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        playRound(choice.textContent, getComputerChoice());
    });
});

function displayResult(result) {
    resultDiv.textContent = result;
}
