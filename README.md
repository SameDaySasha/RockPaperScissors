# Rock, Paper, Scissors Game

This project implements a simple version of the classic game "Rock, Paper, Scissors" in JavaScript. The game allows a user to play against the computer by choosing one of the three possible options: rock, paper, or scissors. The winner is determined based on the traditional rules of the game.

## Features

- **User Input Handling**: The game accepts user input, which is case-insensitive, for the choices of rock, paper, or scissors.
- **Computer Choice Generation**: The computer randomly selects its choice from the three possible options.
- **Winning Logic**: The game includes logic to determine the winner based on the choices made by the user and the computer.
- **Playful Feedback**: The game provides feedback to the user regarding the choices made and the outcome of the game.

## How It Works

1. **Initialization**: The game starts by defining the valid choices and creating a Set for efficient validation of user input.
2. **User Choice**: The user's choice is taken as input, converted to lower case for case-insensitive comparison, and validated.
3. **Computer Choice**: The computer's choice is randomly selected from the available options.
4. **Determine Winner**: The winner is determined by comparing the user's choice with the computer's choice according to the game's rules.
5. **Output**: The game outputs the choices and the result (win/lose/tie) to the console.

## Complexity Analysis

### Time Complexity

- **getUserChoice**: O(1) - Direct access to Set for validation.
- **getComputerChoice**: O(1) - Random selection from a fixed-size array.
- **determineWinner**: O(1) - Direct access to properties in an object for comparison.

Overall, the main functions operate in constant time, making the game efficient in terms of execution time.

### Space Complexity

- The space complexity is primarily influenced by the storage of choices and the mapping of winning choices. Both are fixed and do not scale with input size, leading to O(1) space complexity.

## Requirements

- A modern web browser with JavaScript enabled.

## Running the Game

To run the game, simply include the script in an HTML file or run it using a JavaScript runtime environment like Node.js. The game is initiated by calling the `playGame()` function.

## Customization

- The user's choice in the `playGame` function can be changed from 'rock' to either 'paper' or 'scissors' to simulate different user inputs.

## Conclusion

This simple implementation of "Rock, Paper, Scissors" serves as a fun introduction to basic programming concepts in JavaScript, including functions, conditionals, and random number generation. Its design ensures efficiency and provides a foundation for further extension or complexity.
