

function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3) + 1;  //random number between 1 and 3
    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else if (computerChoice === 3) {
        computerChoice = "scissors";
    }
    else {console.log("Error in computerPlay number selection")}
    return computerChoice;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const compScore = document.querySelector('.computerScore');
const playScore = document.querySelector('.playerScore');
const reset = document.querySelector('.reset');

compScore.textContent = '0';
playScore.textContent = '0';

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

reset.addEventListener('click', () => newGame());

function newGame() {
    compScore.textContent = '0';
    playScore.textContent = '0';
}

function playRound(playerInput) {
    let computer = computerPlay()
    let computerScore = compScore.textContent;
        computerScore = Number(computerScore);
    let playerScore = playScore.textContent;
        playerScore = Number(playerScore);


    if (playerInput === "rock") {
        if (playerInput === computer) {
            alert("Tied");
            return;
        }
        else if (computer === "paper") {
            alert("Computer wins");
            computerScore += 1;
            compScore.textContent = `${computerScore}`;
            checkScore()
            return;
        }
        else {
            alert("You win");
            playerScore += 1;
            playScore.textContent = `${playerScore}`;
            checkScore()
            return;
        }
    }
    else if (playerInput === "paper") {
        if (playerInput === computer) {
            alert("Tied");
            return;
        }
        else if (computer === "scissors") {
            alert("Computer wins");
            computerScore += 1;
            compScore.textContent = `${computerScore}`;
            checkScore()
            return;
        }
        else {
            alert("You win");
            playerScore += 1;
            playScore.textContent = `${playerScore}`;
            checkScore()
            return;
        }
    }
    else if (playerInput === "scissors") {
        if (playerInput === computer) {
            alert("Tied");
            return;
        }
        else if (computer === "rock") {
            alert("Computer wins");
            computerScore += 1;
            compScore.textContent = `${computerScore}`;
            checkScore()
            return;
        }
        else {
            alert("You win");
            playerScore += 1;
            playScore.textContent = `${playerScore}`;
            checkScore()
            return;
        }
    }
    else {
        console.log('Error in playRound');
    }
    
    function checkScore() {
        if (computerScore == 5) {
            alert('The computer wins the game!  Better luck next time.');
        }
        else if (playerScore == 5) {
            alert('You win the game!  The computer might want a rematch.');
        }
        else return;
    }
}



