// define variables
const output = document.getElementById("output");
const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

// chose an item from the list randomly
const computerMakeChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

const logScore = (userScoreNumber, computerScoreNumber) => {
    const userScoreElement = document.getElementById("userScore");
    const computerScoreElement = document.getElementById("computerScore");
    userScoreElement.innerText = `User score : ${userScoreNumber}`;
    computerScoreElement.innerText = `Computer score : ${computerScoreNumber}`;
};

//play the round - need to find a way to only execute once you get a value, could call the function within the event listener but that feels wrong.
const playRound = (userChoice) => {
    let computerChoice = computerMakeChoice();
    [userScore, computerScore] = compareChoices(userChoice, computerChoice);
    logScore(userScore, computerScore);
    output.scrollTop = output.scrollHeight;
};
// put info onto the screen
const logToOutputBox = (message) => {
    const newText = document.createTextNode(message + "\n");
    output.appendChild(newText);
};
// yucky if chain for comparing the choices to add score, returns array
const compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        logToOutputBox("User and computer tied.");
    } else if (userChoice === "Rock" && computerChoice == "Scissors") {
        logToOutputBox(`Computer chose ${computerChoice}, User Wins!`);
        userScore += 1;
    } else if (userChoice === "Paper" && computerChoice == "Rock") {
        logToOutputBox(`Computer chose ${computerChoice}, User Wins!`);
        userScore += 1;
    } else if (userChoice === "Scissors" && computerChoice == "Paper") {
        logToOutputBox(`Computer chose ${computerChoice}, User Wins!`);
        userScore += 1;
    } else {
        logToOutputBox(`Computer chose ${computerChoice}, Computer Wins!`);
        computerScore += 1;
    }
    return [userScore, computerScore];
};

// Event listeners on each button, wait for one to be clicked, then play the round based off that input, then log to to the box the results.
const getUserInput = () => {
    const rock = document.getElementById("Rock");
    const paper = document.getElementById("Paper");
    const scissors = document.getElementById("Scissors");
    rock.addEventListener("click", () => {
        userChoice = "Rock";
        playRound(userChoice);
    });
    paper.addEventListener("click", () => {
        userChoice = "Paper";
        playRound(userChoice);
    });
    scissors.addEventListener("click", () => {
        userChoice = "Scissors";
        playRound(userChoice);
    });
};
// start game on script load (after page loads.)
getUserInput();
