const choices = ["rock", "paper", "scissors"];

// Gets users input and makes sure it has a value.
const getUserInput = () => {
    let userInput = prompt("Rock, Paper, or Scissors? (R,P,Or S is accepted.)");
    if (userInput.length == 0) {
        getUserInput();
    } else {
        userInput = userInput.toLowerCase();
        return userInput;
    }
};

// get random number between 1 and 3
const randomChoice = () => {
    let num = Math.floor(Math.random() * 3);
    let choice = choices[num];
    return choice;
};

// convert input to correct choice
const convertToChoice = (input) => {
    for (let i = 0; i < choices.length; i++) {
        if (input === choices[i]) {
            return choices[i];
        } else if (input === choices[i].charAt(0)) {
            return choices[i];
        }
    }
};

const playRound = () => {
    let userChoice = convertToChoice(getUserInput());
    let computerChoice = convertToChoice(randomChoice());
    if (userChoice === "rock" && computerChoice === "scissors") {
        console.log("User Wins!");
        console.log(`Computer chose ${computerChoice}`);
        userScore += 1;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log("User Wins!");
        console.log(`Computer chose ${computerChoice}`);
        userScore += 1;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log("User Wins!");
        console.log(`Computer chose ${computerChoice}`);
        userScore += 1;
    } else if (userChoice === computerChoice) {
        console.log(
            `User chose ${userChoice} and computer chose ${computerChoice}, therefore this round is a tie, Go again.`
        );
        playRound();
    } else {
        console.log("User Loses :(");
        console.log(`Computer chose ${computerChoice}`);
        computerScore += 1;
    }
    return [userScore, computerScore];
};

const bestOfThree = (userScore, computerScore) => {
    for (let i = 0; i < 2; i++) {
        [userScore, computerScore] = playRound();
        if (userScore == 2) {
            console.log("User Wins Game!");
            break;
        }
        if (computerScore == 2) {
            console.log("Computer Wins :(");
            break;
        }
    }
};
// initialise two variables outside of the function to keep a running score.
let computerScore = 0;
let userScore = 0;

[userScore, computerScore] = playRound();
bestOfThree(userScore, computerScore);
