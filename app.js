let humanScore = 0;
let computerScore = 0;

let finalRes = document.querySelector('#finalres');

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    let ans;
    if (result === 1) ans = 'rock';
    else if (result === 2) ans = 'paper';
    else ans = 'scissors';
    return ans;
}



function playRound(humanChoice, computerChoice) {

    // Draw condition
    if (humanChoice === computerChoice) {
        finalRes.textContent= "Results:It's a draw!";
    }
    // Loss conditions: rock loses to paper, scissors loses to rock, paper loses to scissors
    else if (
        (humanChoice === 'rock' && computerChoice === 'paper') || 
        (humanChoice === 'scissors' && computerChoice === 'rock') || 
        (humanChoice === 'paper' && computerChoice === 'scissors')
    ) {
        finalRes.textContent = `  Results: You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++; // Increment computer score
    }

    // Win conditions: rock beats scissors, scissors beats paper, paper beats rock
    else {
        finalRes.textContent = ` Results:You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++; // Increment human score
    }

    return finalRes.textContent;
}

// Get choices

// Play round

function playGame() {
    let button = document.querySelectorAll('button')
    let score = document.querySelector('#score');
    let rounds = 0;
    let round = document.querySelector('#rnd');
    button.forEach( ((btn)=>{
        btn.addEventListener('click', ()=>{
            
            if (rounds< 5) {
                round.textContent = `ROUND:${rounds +1}`;
        
        humanSelection = btn.value;
        const computerSelection = getComputerChoice();
            result = playRound(humanSelection, computerSelection);
            rounds++;
          
            score.textContent = (` Current Score- You-- ${humanScore}, 
                Computer Score -- ${computerScore}
                `
            )
        
    
            if (rounds ===5) {
                let newWinner;
                
            if (humanScore>computerScore) {
                    newWinner = 'Congrats; You Win 🎉🤩'
                }
                else if (humanScore < computerScore) {
                    newWinner = 'Game Over!, Computer Wins 😥'
                }
                else{
                    newWinner = 'It is Tie, This Time'
                }
                finalRes.textContent = `Result:${newWinner}`

            }
     
        }
    })
}))


  
   
    
}
playGame();


