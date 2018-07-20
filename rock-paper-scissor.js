//user pick their choice by parameter
const getUserChoice = (userInput) =>{
  userInput.toLowerCase();
  switch (userInput){
    case 'rock':
    	return userInput;
    	break;
    case 'scissors':
      return userInput;
      break;
    case 'paper':
      return userInput;
      break;
    default:
      console.log("Please enter a valid choice")
      break;
  }
}

//computer picking up random choice
const getComputerChoice = () =>{
  let number = Math.floor(Math.random() * 3);
  if (number === 0){
    return 'rock';
  } else if (number === 1){
    return 'paper';
  } else {
    return 'scissors';
  }
}


//function that determine winner between two players
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'The game is a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won!'
    }else{
      return 'You win!'
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won!';
    }
  }else {
    return 'You win!';
  }

 if(userChoice === 'scissors'){
   if(computerChoice === 'rock'){
     return 'Computer won!';
   }else {
     return 'You win!';
   }
 }
}

//function to play the game and reveal winner
const playGame = () =>{
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

//initiate the play
playGame();
