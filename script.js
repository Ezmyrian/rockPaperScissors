/* Create a game of rock, paper, scissors.
The first function should randomly picks a selection for the computer.
The second function takes the computers random selection and a case
    insensitive input from the user, and compares the results.  Then 
    output the winner.
The third function will use the other functions to play a five round
    game and keep score and report a winner at the end.

Outline:
    Function 1:
    Create variable for computer selection.
    randomly generate a number between 1 and 3
    Assign rock, paper, or scissors based on the random number generated.

    Function 2:
    Create variable for player selection and get player input
    De-sensitize player input.
    compare results with if/else.
    output winner

    Function 3:
    create variable to track computer wins
    create variable to track player wins
    run playRound function five times, adding the number of wins to win variable
        as appropriate.
    compare player wins and computer wins
    output winner. 
*/

function computerPlay() {
    let x = Math.floor(Math.random()*3) + 1;  //random number between 1 and 3
    if (x === 1) {
        x = "rock";
    }
    else if (x === 2) {
        x = "paper";
    }
    else if (x === 3) {
        x = "scissors";
    }
    else {console.log("Error in computerPlay number selection")}
    return x;
}

function playRound() {
    let playerInput = prompt("Rock, Paper, or Scissors?", "Rock, Paper, Scissors");
    playerInput = playerInput.trim()
    if (playerInput.length > 0) {
        playerInput = playerInput.toLowerCase();
        if (playerInput === "rock") {
            let computer = computerPlay()
            if (playerInput === computer) {
                alert("Tied");
                let output = "rockrock";
                return output;
            }
            else if (computer === "paper") {
                alert("Computer wins");
                let output = "rockpaper";
                return output;
            }
            else {
                alert("You win");
                let output = "rockscissors";
                return output;
            }
        }
        else if (playerInput === "paper") {
            let computer = computerPlay()
            if (playerInput === computer) {
                alert("Tied");
                let output = "paperpaper";
                return output;
            }
            else if (computer === "scissors") {
                alert("Computer wins");
                let output = "paperscissors";
                return output;
            }
            else {
                alert("You win");
                let output = "paperrock";
                return output;
            }
        }
        else if (playerInput === "scissors") {
            let computer = computerPlay()
            if (playerInput === computer) {
                alert("Tied");
                let output = "scissorsscissors";
                return output;
            }
            else if (computer === "rock") {
                alert("Computer wins");
                let output = "scissorsrock";
                return output;
            }
            else {
                alert("You win");
                let output = "scissorspaper";
                return output;
            }
        }
        else {
            alert("Pick Rock, Paper, or Scissors");
            playRound()
        }
        return output;
    }
    else {
        alert("Pick Rock, Paper, or Scissors");
        playRound()
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;

    let score = subFunction()
        function subFunction() {
            let compare = playRound();
            console.log(compare);
             if (compare === "rockscissors" || compare === "scissorspaper" || compare === "paperrock") {
                return 1;  //Player wins
            }
            else if (compare === "scissorsrock" || compare === "paperscissors" || compare === "rockpaper") {
                return 2;  //Computer wins
            }
            else {
                return 3;  //Tie
            }
        }
    console.log(score);
    if (score === 1) {
        playerScore = playerScore + 1;
    }
    else if (score === 2) {
        computerScore = computerScore + 1;
    }
    else {
        console.log(score);
    }

    console.log("computer Score: " + computerScore);
    console.log("player Score: " + playerScore);






    score = subFunction()
        function subFunction() {
            let compare = playRound();
            if (compare === "rockscissors" || compare === "scissorspaper" || compare === "paperrock") {
                return 1;  //Player wins
            }
            else if (compare === "scissorsrock" || compare === "paperscissors" || compare === "rockpaper") {
                return 2;  //Computer wins
            }
            else {
                return 3;  //Tie
            }
        }
    if (score === 1) {
        playerScore = playerScore + 1;
    }
    else if (score === 2) {
        computerScore = computerScore + 1;
    }
    else {
        //Do Nothing
    }

    console.log("computer Score: " + computerScore);
    console.log("player Score: " + playerScore);

    score = subFunction()
        function subFunction() {
            let compare = playRound();
            if (compare === "rockscissors" || compare === "scissorspaper" || compare === "paperrock") {
                return 1;  //Player wins
            }
            else if (compare === "scissorsrock" || compare === "paperscissors" || compare === "rockpaper") {
                return 2;  //Computer wins
            }
            else {
                return 3;  //Tie
            }
        }
    if (score === 1) {
        playerScore = playerScore + 1;
    }
    else if (score === 2) {
        computerScore = computerScore + 1;
    }
    else {
        //Do Nothing
    }

    console.log("computer Score: " + computerScore);
    console.log("player Score: " + playerScore);

    score = subFunction()
        function subFunction() {
            let compare = playRound();
            if (compare === "rockscissors" || compare === "scissorspaper" || compare === "paperrock") {
                return 1;  //Player wins
            }
            else if (compare === "scissorsrock" || compare === "paperscissors" || compare === "rockpaper") {
                return 2;  //Computer wins
            }
            else {
                return 3;  //Tie
            }
        }
    if (score === 1) {
        playerScore = playerScore + 1;
    }
    else if (score === 2) {
        computerScore = computerScore + 1;
    }
    else {
        //Do Nothing
    }

    console.log("computer Score: " + computerScore);
    console.log("player Score: " + playerScore);

    score = subFunction()
        function subFunction() {
            let compare = playRound();
            if (compare === "rockscissors" || compare === "scissorspaper" || compare === "paperrock") {
                return 1;  //Player wins
            }
            else if (compare === "scissorsrock" || compare === "paperscissors" || compare === "rockpaper") {
                return 2;  //Computer wins
            }
            else {
                return 3;  //Tie
            }
        }
    if (score === 1) {
        playerScore = playerScore + 1;
    }
    else if (score === 2) {
        computerScore = computerScore + 1;
    }
    else {
        //Do Nothing
    }

    console.log("computer Score: " + computerScore);
    console.log("player Score: " + playerScore);


    if (playerScore > computerScore) {
        alert("You win");
    }
    else if (computerScore > playerScore) {
        alert("You lose");
    }
    else {
        alert("Tied");
    }
}
game()