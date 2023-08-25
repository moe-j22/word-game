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

var resetButton = document.querySelector(".reset-button")
let timer;
let timeLeft = 10; 

function beginGame() {
  let startButton = document.createElement("button");
  startButton.textContent = "Start"
  document.body.appendChild(startButton);
}

function resetGame() {
  winCount = 0;
  lossCount = 0;

  gamesWon()
  gamesLost()
}

function gameOver() {
  cancelInterval(timer);
  $('playAgainButton').show();
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0)
  $('timer').html(timeleft);
  else{
    gameOver();
  }
}

function start() {
  timer = setInterval(updateTimer, 1000);
  updateTimer();
  $('#playAgainButton').hide();
}

resetButton.addEventListener("click", resetGame)