/* Rock Paper Scissors - DOM Manipulation version project from The Odin Project Web Development 101 course
  https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation?ref=lnav#learning-outcomes */

let computerSelection; 

let playerSelection; 

let playerPoints = 0;

let computerPoints = 0;

let result = '';

const message = document.querySelector('#message');

const computerChoice = document.querySelector('#computerChoice');

const winner = document.querySelector('#winner > p');


function writeMessage(result){
      message.textContent = result;
}  

function writeComputerChoice() {
  computerChoice.textContent = `The computer chooses ${computerSelection}.  `;
}

function nameWinner(playerPoints, computerPoints) {

   if (playerPoints > computerPoints) {
      winner.textContent = "Game over! You win!  Click anywhere on page to play again.  ";
   } else if (computerPoints > playerPoints) {
    winner.textContent = "Game over!  You lose!  Click anywhere on page to play again.  ";
   } else {
    winner.textContent = "Game over!  It's a tie! Click anywhere on page to play again.  ";
   }

   document.addEventListener('click', event => {
     window.location.reload();
   });
}

 function computerPlay() {  
  let min;
  let max;
   function randomInteger(min, max) {  
     min = Math.ceil(1);
     max = Math.floor(3);
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   if (randomInteger(min, max) === 1) {
     computerSelection = "rock";
   } else if (randomInteger(min, max) === 2) {
     computerSelection = "paper";
   } else {
      computerSelection = "scissors";
   }
 
 return computerSelection;

}
 
function playGame() {

  let rock = document.querySelector('#rock');
    rock.addEventListener('click', playerChooses = () => {
      playerSelection = 'rock';
      computerPlay();
      return  playerSelection;
    } );
        
let paper = document.querySelector('#paper');
  paper.addEventListener('click', playerChooses = () => {
    playerSelection = 'paper';
    computerPlay();
    return  playerSelection;
  });

let scissors= document.querySelector('#scissors');
scissors.addEventListener('click', playerChooses = () => {
    playerSelection = 'scissors';
    computerPlay();
    return  playerSelection;
});

  function playerWins(playerSelection, computerSelection) {
    result = `Computer loses round ${roundNumber}!  ${playerSelection} beats ${computerSelection}`;
    playerPoints++;
    writeComputerChoice();
    writeMessage(`${result}`);
    makeHumanScore(playerPoints);
    return result;
  } 

  function computerWins(playerSelection, computerSelection) {
      result = `You lose round ${roundNumber}! ${computerSelection} beats ${playerSelection}`;
     computerPoints++;
     writeComputerChoice();
     writeMessage(`${result}`);
     makeComputerScore(computerPoints);
      return result;
  } 

  function tie(playerSelection, computerSelection) {
     result = `It's a tie!`;
     writeComputerChoice();
    writeMessage(`${result}`);
     return result;
  }  
let roundNumber = 0;

  document.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {

      if (roundNumber < 5) {

    if (playerSelection === computerSelection) { 
      roundNumber++;
      result = tie(playerSelection, computerSelection);
     
    }  else  if (playerSelection ==="rock" && computerSelection === "paper") {
      roundNumber++;
      result = computerWins(playerSelection, computerSelection);
     
    }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
      roundNumber++;
      result = playerWins(playerSelection, computerSelection);
     
    } else if (playerSelection === "paper"  && computerSelection === "scissors") {
      roundNumber++;
      result = computerWins(playerSelection, computerSelection);
      
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
      roundNumber++;
      result = playerWins(playerSelection, computerSelection);
      
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      roundNumber++;
      result = playerWins(playerSelection, computerSelection); 
    
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
      roundNumber++;
      result = computerWins(playerSelection, computerSelection);
    }  
  } else {
   
    nameWinner(playerPoints, computerPoints);
  }
 }
});
}

function makeHumanScore(playerPoints) {
  const humanPoints = document.querySelector('#human');
  humanPoints.textContent = `Human:  ${playerPoints}`;
} 

function makeComputerScore(computerPoints) {
  const cmptrPoints = document.querySelector('#computer');
  cmptrPoints.textContent=`Computer:  ${computerPoints}`;
} 

    playGame();
  