const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if(userInput==='rock'|| userInput==='paper'|| userInput==='scissor'||userInput==='bomb'){
    return userInput;
  }
  else{
    console.log('Error in userInput');
  }
}
const getComputerChoice = () => {
 randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'paper';
    case 1: 
      return 'rock';
    case 2:
      return 'scissors';
  }
}
const determineWinner = (userChoice , computerChoice) => {
  
  if(userChoice === computerChoice){
    return 'The game was a tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){ 
      return 'Sorry, Computer won';
      }
    else {
      return 'You won! congrats';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){ 
      return 'Sorry, Computer won';
      }
    else {
      return 'You won! congrats';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){ 
      return 'Sorry, Computer won';
      }
    else {
      return 'You won! congrats';
    }
  }
  if(userChoice === 'bomb'){
    return 'YOU WON THE GAME HAHA';
  }
}

/*console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
*/

const playGame = () =>{
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));

};
playGame();
