//a start button that begins the game
//letters must match the number of blanks
//game is timed
//user wins when all letters of the word has been guessed
//user loses when the timer runs ous 
//total wins and loses show on screen

//when letter is clicked, letter is captured as a key event
//when letter matches blank, blank should be replaced with letter.
//when game is over, message should appear and timer should end
//when user clicks start, timer should reset
//when user refreshes, win and loss counts should persists. 


function beginGame() {
  let startButton = document.createElement("button");
  startButton.textContent = "Start"
  document.body.appendChild(startButton);
}



var resetButton = document.querySelector(".reset-button")

function resetGame() {
  winCount = 0;
  lossCount = 0;

  gamesWon()
  gamesLost()
}
resetButton.addEventListener("click", resetGame)
