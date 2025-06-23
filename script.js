// Initialize Scores
let humanScore = 0;
let computerScore = 0;

// Get DOM Elements
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let resultDiv = document.querySelector("#results");

rock.addEventListener("click", () => {
    const result = playRound('rock', getComputerChoice());
    updateUI(result);
});

paper.addEventListener("click", () => {
    const result = playRound('paper', getComputerChoice());
    updateUI(result);
});

scissors.addEventListener("click", () => {
    const result = playRound('scissors', getComputerChoice());
    updateUI(result);
});

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;

    if (randomNum === 0) {
        choice = "rock";
    } else if (randomNum === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return { message: "DRAW!", winner: null };
    } else if (
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")
    ) {
        return { message: "You win! " + playerSelection + " beats " + computerSelection, winner: "human" };
    } else {
        return { message: "You lose! " + computerSelection + " beats " + playerSelection, winner: "computer" };
    }
}

// Function to update the UI
function updateUI(result) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if (result.winner === "human") {
        humanScore++;
    } else if (result.winner === "computer") {
        computerScore++;
    }

    resultDiv.innerHTML = `
        <p> ${result.message}</p>
        <p> Score: You ${humanScore} - Computer ${computerScore} </p>
    `;

    if (humanScore === 5 || computerScore == 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultDiv.innerHTML += `
            <p class="winner"> ${winner} win${winner === "You" ? "" : "s"} the game! </p>
        `;
        return;
    }

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}