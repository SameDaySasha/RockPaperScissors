// Define a list of valid choices for the game: rock, paper, and scissors.
const choices = ['rock', 'paper', 'scissors'];

// Create a set from the choices to efficiently check if a given input is a valid choice.
const validChoices = new Set(choices);

// Function to get the user's choice. The input is processed to be case-insensitive.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  // Check if the user's choice is valid.
  if (validChoices.has(userInput)) {
    return userInput;
  } else {
    // If the choice is invalid, return a playful error message.
    return `Cmon man, don't you know how to play this game? Pick a valid option, dawg.`;
  }
};

// Function to get the computer's choice by selecting a random option from the choices.
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to determine the winner of the game.
const determineWinner = (userChoice, computerChoice) => {
  // If both choices are the same, it's a tie.
  if (userChoice === computerChoice) {
    return 'Tie! Try again';
  }

  // Define which choices beat what.
  const winningChoices = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  // Determine if the user won based on the choices.
  if (winningChoices[userChoice] === computerChoice) {
    return 'Congratulations, you won!';
  } else {
    // If the user didn't win, the computer wins by default.
    return 'Computer won, better luck next time!';
  }
};

// Main function to play the game.
const playGame = () => {
  // Get the user's choice. Currently set to 'rock' but can be changed to 'paper' or 'scissors'.
  const userChoice = getUserChoice('rock');
  // Get the computer's choice.
  const computerChoice = getComputerChoice();

  // Log the choices to the console.
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  // Determine the winner and log the result.
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

// Start the game by calling the playGame function.
playGame();
