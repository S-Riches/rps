const output = document.getElementById("output");
const choices = ["Rock", "Paper", "Scissors"];
// define variables
let userScore = 0;
let computerScore = 0;

// chose an item from the list randomly
const computerMakeChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

//play the round - need to find a way to only execute once you get a value, could call the function within the event listener but that feels wrong.
const playRound = () => {
    let userChoice = getUserInput();
    let computerChoice = computerMakeChoice();
    [userScore, computerScore] = compareChoices(userChoice, computerChoice);
    console.log(userScore, computerScore);
    console.log(userChoice, computerChoice);
};
// put info onto the screen
const logToOutputBox = (message) => {
    const newText = document.createTextNode(message + "\n");
    output.appendChild(newText);
};

const compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        playRound();
    } else if (userChoice === "Rock" && computerChoice == "Scissors") {
        userScore += 1;
    } else if (userChoice === "Paper" && computerChoice == "Rock") {
        userScore += 1;
    } else if (userChoice === "Scissors" && computerChoice == "Paper") {
        userScore += 1;
    } else {
        computerScore += 1;
    }
    return [userScore, computerScore];
};

// get the users input from the buttons, kind of the main loop as we want the user to input a choice and get a response.
const getUserInput = () => {
    const rock = document.getElementById("Rock");
    const paper = document.getElementById("Paper");
    const scissors = document.getElementById("Scissors");
    // needed to break out of the event listener once a button is clicked.
    const controller = new AbortController();
    // add event listeners on each button, wait for one to be clicked, then return that data.
    rock.addEventListener(
        "click",
        () => {
            userChoice = "Rock";
            console.log(userChoice);
            // break out of the event listener
            controller.abort();
            return userChoice;
        },
        { signal: controller.signal }
    );
    paper.addEventListener(
        "click",
        () => {
            userChoice = "Paper";
            console.log(userChoice);
            controller.abort();
            return userChoice;
        },
        { signal: controller.signal }
    );
    scissors.addEventListener(
        "click",
        () => {
            userChoice = "Scissors";
            console.log(userChoice);
            controller.abort();
            return userChoice;
        },
        { signal: controller.signal }
    );
};
playRound();
