const gameOptions = ["Rock", "Paper", "Scissors"];
// console.log(gameOptions);
const player = {
    choice: null
};

const computer = {
    choice: null
};
const playerSelection = (e) => {
    player.choice = e.target.id
}

document.getElementById('rock').addEventListener('click', playerSelection);
document.getElementById('paper').addEventListener('click', playerSelection);
document.getElementById('scissors').addEventListener('click', playerSelection);

const computerChoices = () => {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let computerChoice = gameOptions[num]
    console.log("Computer Choice: " + computerChoice);
    return computerChoice
}
let computerChoice = computerChoices();

const compareChoices = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice){ 
        console.log("It's a tie!");
    } else if (computerChoice !== playerChoice && computerChoice === "Rock"){
        if(playerChoice ==="Paper"){
        console.log(playerChoice + " beats " + computerChoice)
    } else {
        console.log(computerChoice + " beats " + playerChoice);
    }
    // console.log( computerChoice + " beats " + playerChoice + "!");
    } else if (computerChoice !== playerChoice && computerChoice === "Paper"){
        if(playerChoice === "Scissors"){
        console.log(playerChoice + " beats " + computerChoice)
        } else {
        console.log(computerChoice + " beats " + playerChoice);
        } 
    } else if (computerChoice !== playerChoice && computerChoice === "Scissors"){ 
    if(playerChoice === "Rock"){
        console.log(playerChoice + " beats " + computerChoice)
        } else {
        console.log(computerChoice + " beats " + playerChoice);
        }
    }
}
compareChoices(computerChoice, player.choice);