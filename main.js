let computerSelection; 

let playerSelection; 

let playerPoints = 0;

let computerPoints = 0;

let result = '';

const message = document.querySelector('#message');

const computerChoice = document.querySelector('#computerChoice');

const winner = document.querySelector('#winner');


function writeMessage(result){
      message.textContent = result;
}  

function writeComputerChoice() {
  computerChoice.textContent = `The computer chooses ${computerSelection}`;
}

function nameWinner(playerPoints, computerPoints) {

const winnerMessage = document.createElement('p');
winner.classList.add('winnerMessage');

  

   if (playerPoints > computerPoints) {
      winner.textContent = "Game over! You win!";
   } else if (computerPoints > playerPoints) {
    winner.textContent = "Game over!  You lose!";
   } else {
    winner.textContent = "Game over!  It's a tie!";
   }
   
   winnerMessage.appendChild("Game over");
}




/*
let rock = document.querySelector('#rock');
rock.addEventListener('click', playerChooses = () => {
    playerSelection = 'rock';
   
});
        
let paper = document.querySelector('#paper');
paper.addEventListener('click', playerChooses = () => {
    playerSelection = 'paper';
});

let scissors= document.querySelector('#scissors');
scissors.addEventListener('click', playerChooses = () => {
    playerSelection = 'scissors';
});
*/





//computerPlay() doesn't seem to do anything when written as arrow function
 function computerPlay() {  
  let min;
  let max;
   function randomInteger(min, max) {  
     min = Math.ceil(1);
     max = Math.floor(3);
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   //randomInteger();

   if (randomInteger(min, max) === 1) {
     computerSelection = "rock";
   } else if (randomInteger(min, max) === 2) {
     computerSelection = "paper";
   } else {
      computerSelection = "scissors";
   }
 
 //console.log(`computerSelection ${computerSelection}`);
 return computerSelection;
 
}
 
//computerPlay();


function playOneRound() {

  //computerPlay() inside playerChooses to make computerPlay() wait until player clicks a button
  //let playerPoints = 0;
  //let computerPoints = 0;

  //playerPoints = 0;
  //computerPoints = 0;

  let rock = document.querySelector('#rock');
    rock.addEventListener('click', playerChooses = () => {
      playerSelection = 'rock';
      computerPlay();
      console.log(playerSelection);
      return  playerSelection;
    } );
        
let paper = document.querySelector('#paper');
  paper.addEventListener('click', playerChooses = () => {
    playerSelection = 'paper';
    computerPlay();
    console.log(playerSelection);
    return  playerSelection;
  });

let scissors= document.querySelector('#scissors');
scissors.addEventListener('click', playerChooses = () => {
    playerSelection = 'scissors';
    computerPlay();
    console.log(playerSelection);
    return  playerSelection;
});

//console.log(playerSelection);
//computerPlay();

  function playerWins(playerSelection, computerSelection) {
    result = `Computer loses!  ${playerSelection} beats ${computerSelection}`;
    playerPoints++;
    console.log(result);
    writeComputerChoice();
    writeMessage(`${result}`);
    console.log(`Player ${playerPoints}`);
    makeHumanScore(playerPoints);
    return result;
  } 

  function computerWins(playerSelection, computerSelection) {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
     computerPoints++;
     console.log(result);
     writeComputerChoice();
     writeMessage(`${result}`);
     console.log(`Computer ${computerPoints}`);
     makeComputerScore(computerPoints);
      return result;
  } 

  function tie(playerSelection, computerSelection) {
     result = `It's a tie!`;
     writeComputerChoice();
    writeMessage(`${result}`);
    console.log(result);
     return result;
  }  
let roundNumber = 0;

  document.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {

      if (roundNumber < 5) {

    if (playerSelection === computerSelection) { 
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = tie(playerSelection, computerSelection);
     // console.log(result);
      //return result;

    }  else  if (playerSelection ==="rock" && computerSelection === "paper") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = computerWins(playerSelection, computerSelection);
     //console.log(result);
      //return result;

    }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = playerWins(playerSelection, computerSelection);
      //console.log(result);
    //return result;


    } else if (playerSelection === "paper"  && computerSelection === "scissors") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = computerWins(playerSelection, computerSelection);
      //console.log(result);
    //return result;

    }   else if (playerSelection === "paper" && computerSelection === "rock") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = playerWins(playerSelection, computerSelection);
      //console.log(result);
    //return result;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = playerWins(playerSelection, computerSelection); 
     // console.log(result);
    //return result;

    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
      roundNumber++;
      console.log(`round ${roundNumber}`);
      console.log(`computerSelection ${computerSelection}`);
      result = computerWins(playerSelection, computerSelection);
     // console.log(result); 
    //return result;
    }  
  } else {
     
    
    console.log(`total player points:  ${playerPoints}`);
     console.log(`total computer points:  ${computerPoints}`);

    if (playerPoints > computerPoints) {
          console.log("You win!");
    } else if (computerPoints > playerPoints) {
          console.log ("You lose!");
    } else {
          console.log ("It's a tie!");
    }
    console.log("Game over");

    nameWinner(playerPoints, computerPoints);
  }
}
 });
}

function makeHumanScore(playerPoints) {
  const humanPoints = document.querySelector('#human');
  humanPoints.textContent = `Human:  ${playerPoints}`;

} //works, but not when writeMessage called

function makeComputerScore(computerPoints) {
  const cmptrPoints = document.querySelector('#computer');
  cmptrPoints.textContent=`Computer:  ${computerPoints}`;
} //works, but not when writeMessage called

/*
function writeMessage(result){
  const message = document.querySelector('#message');
  message.textContent = result;
}  // TypeError:  message is null main.js 214.3
*/

/*
document.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
 */   
    playOneRound();
  /*  
  }
});
*/  
/*
    if (playerSelection === computerSelection) { 
      result = tie(playerSelection, computerSelection);
      console.log(result);
      //return result;
 
    }  else if (playerSelection ==="rock" && computerSelection === "paper") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result);
      //return result;

    }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
      result = playerWins(playerSelection, computerSelection);
      console.log(result);
      //return result;


    } else if (playerSelection === "paper"  && computerSelection === "scissors") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result);
      //return result;

    }   else if (playerSelection === "paper" && computerSelection === "rock") {
      result = playerWins(playerSelection, computerSelection);
      console.log(result);
      //return result;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result = playerWins(playerSelection, computerSelection); 
      //return result;

    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result); 
    
      //return result;
    
 /* }
}); */





/*document.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') { */
  
/*
  }
});
*/


//playOneRound();





/*let computerSelection;
let playerSelection;
let randomInteger;
let min;
let max;

// computer selects rock, paper, scissors)
        function computerPlay() {  
            function randomInteger(min, max) {  
                min = Math.ceil(1);
                max = Math.floor(3);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randomInteger();

            if (randomInteger(min, max) === 1) {
              computerSelection = "rock";
            } else if (randomInteger(min, max) === 2) {
                computerSelection = "paper";
            } else {
               computerSelection = "scissors";
            }
            
            //console.log(`computerSelection ${computerSelection}`);
            return computerSelection;
            
        } 

        /*
        function playerChoice() {
            let rock = document.querySelector('#rock');
            rock.addEventListener('click', playerSelection = 'rock');
            console.log(`playerSelection is ${playerSelection}`);
            let paper = document.querySelector('#paper');
            let scissors = document.querySelector('scissors');
            playerSelection = document.querySelector('')
            //playerSelection = prompt("Rock, paper, or scissors?"); 
            //playerSelection = playerSelection.toLowerCase();   
           /*while (playerSelection !=  "rock" && playerSelection !="paper" && playerSelection != "scissors") {
              console.log("Invalid choice!  Please choose rock, paper, or scissors.");
              playerSelection = prompt("Rock, paper, or scissors?"); 
              playerSelection = playerSelection.toLowerCase();
            }
            return playerSelection;
        }  
        */

   /*     
        let playerWins;
        let computerWins;
        let result;
        //let playerPoints = 0;
        //let computerPoints = 0;

// compares playerSelection, computerSelection declares winner
        function playOneRound() {  
        

          let rock = document.querySelector('#rock');
          rock.addEventListener('click', ()=> playerSelection = 'rock');
        
            console.log(`playerSelection is ${playerSelection}`);
        
            computerPlay();
          console.log(computerSelection);

/*
            let paper = document.querySelector('#paper');

            let scissors = document.querySelector('scissors');

            //playerSelection = document.querySelector('')
            
            computerSelection = computerPlay();
            playerSelection = playerChoice();

            //console.log(`playerSelection in playOneRound: ${playerSelection}`);
            //console.log(`computerSelection in playOneRound: ${computerSelection}`);


            function playerWins(playerSelection, computerSelection) {
                result = `Computer loses!  ${playerSelection} beats ${computerSelection}`;
                //++playerPoints;  
                //console.log(result);
                return result;
            } 
            
            function computerWins(playerSelection, computerSelection) {
                  result = `You lose! ${computerSelection} beats ${playerSelection}`
                 // ++computerPoints; 
                   //console.log(result);
                  return result;
            } 

            function tie(playerSelection, computerSelection) {
                result = `It's a tie!`;
                //console.log(result);
                return result;
              }  

            if (playerSelection === computerSelection) { 
              result = tie(playerSelection, computerSelection);
              return result;
            
            }  else if (playerSelection ==="rock" && computerSelection === "paper") {
              result = computerWins(playerSelection, computerSelection);
              return result;

            }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
              result = playerWins(playerSelection, computerSelection);
              return result;


            } else if (playerSelection === "paper"  && computerSelection === "scissors") {
              result = computerWins(playerSelection, computerSelection);
              return result;

            } else if (playerSelection === "paper" && computerSelection === "rock") {
              result = playerWins(playerSelection, computerSelection);
              return result;

            } else if (playerSelection === "scissors" && computerSelection === "paper") {
              return result;
              
            }  else if (playerSelection === "scissors" && computerSelection === "rock") {
              result = playerWins(playerSelection, computerSelection); 
              result = computerWins(playerSelection, computerSelection);
              return result;
            } /*else {
              console.log("Invalid choice!  Please choose rock, paper, or scissors.");
            }*/

        

 /*       
function game() {
 
    
  for (let gameCounter = 1; gameCounter < 6; gameCounter++) { 
        playOneRound(playerSelection, computerSelection);
        console.log(result); 
   }

        console.log(`total player points:  ${playerPoints}`);
        console.log(`total computer points:  ${computerPoints}`);

        if (playerPoints > computerPoints) {
          console.log("You win!");
        } else if (computerPoints > playerPoints) {
          console.log ("You lose!");
        } else {
          console.log ("It's a tie!");
        }

}  
          
//game();
*/

//playOneRound(playerSelection, computerSelection);  //console displays computerSelection correctly
//console.log(result);
