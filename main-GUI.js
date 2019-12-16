let computerSelection = '';

let playerSelection = '';

let playerPoints = 0;

let computerPoints = 0;

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
 
 console.log(`computerSelection ${computerSelection}`);
 return computerSelection;
 
}
 
//computerPlay();


function playOneRound() {

  //computerPlay() inside playerChooses to make computerPlay() wait until player clicks a button
  //let playerPoints = 0;
  //let computerPoints = 0;

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
    ++playerPoints;  
    //console.log(result);
    return result;
  } 

  function computerWins(playerSelection, computerSelection) {
      result = `You lose! ${computerSelection} beats ${playerSelection}`
     ++computerPoints; 
       //console.log(result);
      return result;
  } 

  function tie(playerSelection, computerSelection) {
     result = `It's a tie!`;
    //console.log(result);
     return result;
  }  



/*
document.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    */
   

    if (playerSelection === computerSelection) { 
      result = tie(playerSelection, computerSelection);
      console.log(result);
      return result;
 
    }  else if (playerSelection ==="rock" && computerSelection === "paper") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result);
      return result;

    }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
      result = playerWins(playerSelection, computerSelection);
      console.log(result);
      return result;


    } else if (playerSelection === "paper"  && computerSelection === "scissors") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result);
      return result;

    }   else if (playerSelection === "paper" && computerSelection === "rock") {
      result = playerWins(playerSelection, computerSelection);
      console.log(result);
      return result;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result = playerWins(playerSelection, computerSelection); 
      return result;

    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = computerWins(playerSelection, computerSelection);
      console.log(result);
      return result;
    } 
 // }
//});

}

function game() {

  let result = 0;
  //let playerPoints = 0;
  //let computerPoints = 0;
  
  document.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
      for (let gameCounter = 1; gameCounter < 6; gameCounter++) { 
        playOneRound();
        console.log(`round ${gameCounter}`);
        console.log(result); 
      }
    }
  });
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

/*document.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') { */
    game();
/*
  }
});
*/


//playOneRound();


