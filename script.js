const textArea = document.querySelector(".display");
const rockClk = document.querySelector("#rock");
const paperClk = document.querySelector("#paper");
const scissorClk = document.querySelector("#scissor");
const game=document.querySelector(".game")

textArea.value = "This game will have 5 rounds. \nTo start the game, please press start\n";

const start = document.querySelector("#start");
const restart=document.createElement("button")
restart.style.width="90px";
restart.style.height="30px";
restart.style.accentColor.backgroundcolor="blueviolet";
restart.textContent="Restart";

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

let humanChoice;
let humanPlayer = 0;
let computerPlayer = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock")
                textArea.value += "\nOops, it's a tie! Both chose rock.";
            else if (computerChoice === "paper") {
                textArea.value += "\nYou lose! Paper wraps rock.";
                computerPlayer += 1;
            } else if (computerChoice === "scissor") {
                textArea.value += "\nYou win! Rock beats scissor.";
                humanPlayer += 1;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                textArea.value += "\nYou win! Paper wraps rock.";
                humanPlayer += 1;
            } else if (computerChoice === "paper")
                textArea.value += "\nOops, it's a tie! Both chose paper.";
            else if (computerChoice === "scissor") {
                textArea.value += "\nYou lose! Scissor cuts paper.";
                computerPlayer += 1;
            }
            break;
        case "scissor":
            if (computerChoice === "rock") {
                textArea.value += "\nYou lose! Rock beats scissor.";
                computerPlayer += 1;
            } else if (computerChoice === "paper") {
                textArea.value += "\nYou win! Scissor cuts paper.";
                humanPlayer += 1;
            } else if (computerChoice === "scissor")
                textArea.value += "\nOops, it's a tie! Both chose scissor.";
            break;
    }
}

function playgame() {
    let round = 1;
    humanPlayer = 0;
    computerPlayer = 0;

    textArea.value = "The game will have 5 rounds.\nChoose Rock, Paper, or Scissors.";

    const buttons = [rockClk, paperClk, scissorClk];
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (round <= 5) {
                restart.remove();
                textArea.value=" ";
                textArea.value += `\nRound ${round}: You chose ${button.id}`;
                humanChoice = button.id;  // Sets human choice based on the button clicked
                let computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
                textArea.value += `\nScore: You: ${humanPlayer}, Computer: ${computerPlayer}`;
                round++;
            }

            if (round > 5) {
                textArea.value=" ";
                game.appendChild(restart);
                restart.addEventListener("click",playgame);
                
                if (humanPlayer > computerPlayer) {
                    textArea.value += `\nCongratulations! You win! with the score of ${humanPlayer}`;
                } else if (humanPlayer < computerPlayer) {
                    textArea.value += `\nSorry! You lost the game. with the score of ${humanPlayer}`;
                } else {
                    textArea.value += `\nIt was a tie! with the score of ${humanPlayer}`;
                }
                textArea.value +="\nIf you want to restart the game click Restart";
            }
        });
    });

    // Remove the start button after game starts
    start.remove();
    
}

start.addEventListener("click", playgame); // Starts the game when 'Start Game' button is clicked
