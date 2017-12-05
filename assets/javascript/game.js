var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenArray = chosenWord.split("");

var guessesLeft = chosenWord.length;
var remainingGuesses  = document.getElementById("remainingguesses");
	
	function updateGuesses() {
		remainingGuesses.innerHTML = "Number of Guesses Remaining: " + guessesLeft;
	}


var lettersGuessed = [];
var letters = document.getElementById("lettersguessed");
	
	function lettersGuess () {
		letters.innerHTML = "Letters Already Guessed: " + lettersGuessed;
	}

	document.onkeypress = function(e) {

      var userGuess = e.key;
  	  //lettersGuessed.push(userGuess);
  	}

  	function userGuess () {
  		lettersGuessed.push(userGuess);
  	}

var currentWord = document.getElementById("currentword");
var answerArray = []

	for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
	}

	function currentWords () {
		currentWord.innerHTML = "Current Word: " + answerArray.join(" ");
	}

var wins = 0; 
var winsPar = document.getElementById("wins");

	function updateScore() {
		winsPar.innerHTML = "Wins: " + wins;
	}	

// Create Game Loop Here

// while (guessesLeft > 0) {
	// take user input
	// compare user guess to letters in array
	// replace _ with letter if guessed correctly
	// display updated array
	// wins++ when user guesses entire word
	// show new word
//}




// Ask why this isn't working
//window.addEventListener('keypress', function (event) {
    //if (event.keyCode !== 13) {
        //lettersGuessed.push(event.key);
    //}
//}, false);

// Calling functions to start game
updateGuesses();
lettersGuess();
currentWords();
updateScore();
userGuess();
