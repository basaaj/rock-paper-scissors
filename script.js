function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = 'lose';

    if (playerSelection === computerSelection) {
        displayResult('A tie! You both picked ' + playerSelection + '.');
        result = 'tie';
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

        result == 'win' ? displayResult('You won! You beat the computer (' + playerSelection + ' beats ' + computerSelection + ').') 
                        : displayResult('You lose! The computer beat you (' + computerSelection + ' beats ' + playerSelection + ').');
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
const resultDiv = document.querySelector('#result');
const scoreboard = document.querySelector('#scoreboard');
let playerScore = 0;
let computerScore = 0;

displayScore();

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        // If someone previously won the game, clear scores
        if (playerScore == 5 || computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
        }

        // Determine winner
        let result = playRound(choice.textContent, getComputerChoice());
        let description = '';

        // Increment score of apporpriate player
        if (result === 'win') {
            playerScore++;

            if (playerScore == 5) {
                description += ' Congrats you beat the computer!';
            }
        }

        else if (result === 'lose') {
            computerScore++;

            if (computerScore == 5) {
                description += ' Sorry, you lost :(';
            }
        }

        // Display the results and score
        displayResult(resultDiv.textContent + description);
        displayScore();
    });
});

function displayResult(result) {
    resultDiv.textContent = result;
}

function displayScore() {
    scoreboard.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
}
