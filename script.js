function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice = 0;

    if (rand == 0) {
        choice = "rock";
    } else if (rand == 1) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

function getUserChoice() {
    return prompt("Enter rock, paper or scissor").toLowerCase();
}

function playRound(userChoice, computerChoice) {
    // -1 => user won, 0 => draw, 1 => computer won
    if (userChoice == computerChoice) 
        return 0;
    else if (userChoice == "rock") {
        if (computerChoice == "paper") 
            return 1;
        else 
            return -1;
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            return -1;
        } else 
            return 1;
    } else if (userChoice == "scissor") {
        if (computerChoice == "rock") {
            return 1;
        } else {
            return -1;
        }
   }
}


let userScore = 0;
let computerScore = 0;

for (var i=0; i<5;i++) {
    let user = getUserChoice();
    let computer = getComputerChoice();

    let val = playRound(user, computer);
    console.log("Round: " + (i+1));
    if (val == 0) {
        i--;
        console.log("Draw. Try again");
    } else if (val == 1) {
        computerScore++;
        console.log("Computer wins");
    } else {
        computerScore--;
        console.log("User wins");
    }
}

if (userScore > computerScore) {
    console.log("USER WON");
} else {
    console.log("COMPUTER WON");
}





