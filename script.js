const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return computerChoice [Math.floor(Math.random()*computerChoice.length)];
}

const playerSelection = prompt("Please Enter a choice");
const computerSelection = getComputerChoice();

// 1 Round Of Game

function playRound(computerSelection, playerSelection){
    if (computerSelection === "Rock" && playerSelection === "Rock") { 
        return "It's a Tie!";
}
    else if (computerSelection === "Scissors" && playerSelection === "Scissors"){
         return "It's a Tie!"
    }
    else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "It's a Tie!";
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper" ) {
        return "Player Wins!";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "Player Wins!";
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        return "Player Wins!";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "Computer Wins";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "Computer Wins";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "Computer Wins";
    }
    else {
        return "Pease Make a Choice";
    }
}

console.log('you chose' + " " + playerSelection);
console.log('computer chose' + " "+ computerSelection);
console.log(playRound(computerSelection, playerSelection));

