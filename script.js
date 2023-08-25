//A game that starts on a "Start" button click - Brian
//The game is a user guessing letters of a word until the word is complete
//The game is timed - Steve
//the game is won when all letters are guessed
//the game is lost when time runs out and blank letters still remain
//the total wins and losses should display on the screen - Nate

//We accomplish this by:
    //when a user presses a key the useers guess is captured as a key event
    //when the user presses a correct key it fills in the word
    //when user wins or loses a message appears and timer stops
    //when start button is clicked timer resets
    //data should persist across refreshes and returns



//timer option 1
let timer;
let timeLeft = 10; //seconds
// moes changes
const words = ["programming", "javaScript", "HTML", "css", "computer"]; // words to be guessed
let currentWordIndex = 0;
let guessedLetters = []; // :)

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
//end timer option 1


//timer option 2

//end timer option 2
