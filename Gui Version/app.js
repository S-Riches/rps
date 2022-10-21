const output = document.getElementById("output");
const choices = ["Rock", "Paper", "Scissors"];
// define variables
let userChoice, computerChoice, userScore, computerScore;

// chose an item from the list randomly
const computerMakeChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

const playRound = () => {
    let userChoice = getUserInput();
    let computerChoice = computerMakeChoice();

    console.log(userChoice, computerChoice);
};

const compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    }
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
        },
        { signal: controller.signal }
    );
    paper.addEventListener(
        "click",
        () => {
            userChoice = "Paper";
            console.log(userChoice);
            controller.abort();
        },
        { signal: controller.signal }
    );
    scissors.addEventListener(
        "click",
        () => {
            userChoice = "Scissors";
            console.log(userChoice);
            controller.abort();
        },
        { signal: controller.signal }
    );
};

playRound();
