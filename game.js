let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset-btn");


const resetGame = () => {
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#2E86AB";
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
}

resetBtn.addEventListener("click" , resetGame);

const showWinner = (userWin) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red"; 
    }
}

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const rdx = Math.floor(Math.random()*3);
    return options[rdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Its a draw";
    msg.style.backgroundColor = "#2E86AB"; 
     

}

const playGame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    //generating computer choice
    const compChoice = genCompChoice();
    console.log("computerchoice = ", compChoice);
    
    if(userChoice === compChoice){
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
        //compChoice left = paper , scissor only
        userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //compChoice left = rock , scissor only
            userWin = compChoice === "scissor" ? false : true; 
            }
        else{
            //compChoice left = rock , paper only
            userWin = compChoice === "rock" ? false : true; 
            }
            showWinner(userWin);
        }
       
    }


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    
});
