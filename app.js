let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scorePara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");


const drawGame = () => {
    msg.innerText = "Game was draw Play Again.";
    msg.style.backgroundColor = "#79D7BE";
};

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const showWinner = (userWin, userChoice , compChoice) => {
    if (userWin) {
      userScore++;
        scorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#5CB338";

    }
    else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FB4141";

    }

}

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = genCompchoice();
    console.log("compChoice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});