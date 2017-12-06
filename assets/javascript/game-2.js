//Variables & Setup
var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenArray = chosenWord.split('');
var chosenKeycode = [];
    for (i=0; i<chosenArray.length; i++){
		chosenKeycode.push(i.keyCode);
	}
var answerArray=[];
    for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
	} 
var lettersGuessed = [];
var guessesLeft=6;
var wins=0;

var round=1;
console.log("Word: " + chosenWord);
console.log("Answer: " + answerArray.join());
console.log("Guesses Left: " + guessesLeft);

//Play game
do {
    console.log("++++++++++++++++++++++++");
    console.log("Round: " + round);
    var a = prompt("Enter Guess");
    
    //check if letter has been guessed
    var x=0;
    while (x===0){
        if (lettersGuessed.indexOf(a)>-1){x=0;a = prompt("Enter Another Guess");}
        else {x=1;lettersGuessed.push(a);}
    }
    
    //Print the letter guessed and letters guessed
    console.log("Guess: " + a);
    console.log("Letters:" + lettersGuessed);
    
    //Check if letter is in answer - Determine win or loss
    if (chosenArray.indexOf(a)>-1){
        for (var i = 0; i < chosenWord.length; i++) {
            if (a===chosenWord[i]){
                answerArray[i]=a;
                console.log(answerArray.join());
                console.log("End of Round: " + round);
            }
            if (answerArray.indexOf("_")===-1){
                console.log("You Win!");
                wins++;
                break;
            }
        }
        round++;
    } else {
        guessesLeft--;
        console.log("Try Again!");
        console.log(answerArray.join());
        round++;
    }
}
while (guessesLeft>0);

console.log("You Lose!");
