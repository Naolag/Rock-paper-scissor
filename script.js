function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let x = getrandom(1, 4); 
    let computerChoice;
    if (x === 1) computerChoice = "rock";
    else if (x === 2) computerChoice = "paper";
    else if (x === 3) computerChoice = "scissor";
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Let's play Rock, Paper, Scissors! Choose rock, paper, or scissor:");
    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissor") {
        return humanChoice.toLowerCase();
    } else {
        console.log("Something is wrong, please try again.");
        return getHumanChoice();
    }
}

let humanPlayer = 0;
let computerPlayer = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock")
                console.log("Oops, it's a tie! Both chose rock.");
            else if (computerChoice === "paper") {
                console.log("You lose! Paper wraps rock.");
                computerPlayer += 1;
            } else if (computerChoice === "scissor") {
                console.log("You win! Rock beats scissor.");
                humanPlayer += 1;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper wraps rock.");
                humanPlayer += 1;
            } else if (computerChoice === "paper")
                console.log("Oops, it's a tie! Both chose paper.");
            else if (computerChoice === "scissor") {
                console.log("You lose! Scissor cuts paper.");
                computerPlayer += 1;
            }
            break;
        case "scissor":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissor.");
                computerPlayer += 1;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissor cuts paper.");
                humanPlayer += 1;
            } else if (computerChoice === "scissor")
                console.log("Oops, it's a tie! Both chose scissor.");
            break;
    }
}
function playgame(){
for (let i = 1; i <= 5; i++) {
    console.log(`The game will have 5 rounds. This is round ${i}.`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Scores for this round are: Human: ${humanPlayer}, Computer: ${computerPlayer}`);
}

if (humanPlayer > computerPlayer)
    console.log(`Congratulations! You win with a total score of ${humanPlayer}.`);
else if (humanPlayer < computerPlayer)
    console.log(`Sorry! You lost the game with a total score of ${humanPlayer}.`);
else
    console.log(`It was a tie with a score of ${humanPlayer}.`);
}

playgame();
