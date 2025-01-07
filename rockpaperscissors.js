
function getComputerChoice() {
    let num = Math.random()*3
    if (num <= 1) {
        return "Rock"
    }
    else if (num > 1 && num <= 2) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}

function getHumanChoice()  {
    let choice = prompt("Rock, Paper, or Scissor")
    choice = choice.toUpperCase()

    if (choice == "ROCK"){
        return "Rock"
    }
    else if (choice == "PAPER"){
        return "Paper"
    }
    else if (choice == "SCISSOR"){
        return "Scissor"
    }

}


let humanScore = 0
let computerScore = 0

function playRound(humanSelection, computerSelection){
    if (humanSelection == "Rock"){
        if (computerSelection == "Rock"){
            console.log("Its a Tie!")
            return
        }
        else if (computerSelection == "Paper"){
            console.log(`You lose ${computerSelection} beats ${humanSelection}!`)
            computerScore = computerScore+1
            return
        }
        else {
            console.log(`You win ${humanSelection} beats ${computerSelection}!`)
            humanScore++
            return
        }
    }
    else if (humanSelection == "Paper"){
        if (computerSelection == "Paper"){
            console.log("Its a Tie!")
            return
        }
        else if (computerSelection == "Scissor"){
            console.log(`You lose ${computerSelection} beats ${humanSelection}!`)
            computerScore++
            return
        }
        else {
            console.log(`You win ${humanSelection} beats ${computerSelection}!`)
            humanScore++
            return
        }
    }
    else {
        if (computerSelection == "Scissor"){
            console.log("Its a Tie!")
            return
        }
        else if (computerSelection == "Rock"){
            console.log(`You lose ${computerSelection} beats ${humanSelection}!`)
            computerScore++
            return
        }
        else if (humanSelection == "Scissor") {
            console.log(`You win ${humanSelection} beats ${computerSelection}!`)
            humanScore++
            return
        }
    }
}

function playGame(){
    for (i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log(`Final Scores are ${humanScore} to ${computerScore}`)
    if (humanScore > computerScore){
        console.log("YOU WIN!")
    }
    else if (humanScore < computerScore){
        console.log("You Lose")
    }
    else {
        console.log("Its a Tie!")
    }
    
}

playGame()


