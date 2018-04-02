// LIST OF THINGS THAT NEED TO BE DONE

// // // Make "PRESS ANY KEY TO GET STARTED!" message hidden after the player has clicked any key to start the  game.

// // // Put guessed letters into arrays.
// // // // // // Guessed letters that are correct in one array. This could be used to check when the same  letter is guessed multiple times.  An alert could be used to notify user that it is a duplicate guess. These could also be used to determine a win. 
// // // // // // Incorrectly guessed letters in another array. This could be used to check when the same  letter is guessed multiple times. An alert could be used to notify user that it is a duplicate guess. If a duplicate guess is made, the user would not lose a guess.

// // // var answer needs to be changed to an array so more answers can be stored. This will also effect the syntax when  var answer is called. Math.random could be used to ensure the words aren't always called in the same order. A larger array of answers would help with that as well.

// // // Currently a player runs out of guesses an alert pops up to notify them. The player clicks OK and nothing happens with the existing game. Need to run a reset function described later in notes.


// // // If player guesses all letters in answerLetterArray:
// // // // // //  Alert, "Nice job! You win this round!"
// // // // // //  Player clicks OK
// // // // // //  wins variable incremented
// // // // // //  display updated to show new value of wins variable
// // // // // //  remove correctly guessed word from answers array.
// // // // // // Run a reset function to set up a new game.

// // // Regardless of wether player wins or loses the game, a reset function is run to reset the game. 
// // // // // //  If answer array is not empty, new answer from answer array should be used to set up the next game. 
// // // // // // // // // // // // The following variables should be set to original values: correctly guessed letter, incorrectly guessed letters, number of guesses left.
// // // // // //  If answer array is empty alert "Congratulations, you have guessed all of the words!". 
// // // // // // // // // // // // The hidden class should be removed from the "PRESS ANY KEY TO GET STARTED!" message. 



// WINS WHEN GAME STARTS
var wins = 0;

// later create array of word choices
// for now try to get game working with this
var answerWord = "notebook";

// CORRECT LETTERS
// used to create the array of correct letters
var answerWordArray = []
// array of correct letters
// var answerLetterArray = [];

// LAST LETTER GUESSED
var userGuessLetter = "";

// LIST OF GUESSED LETTERS
var arrayOfGuessedLetters = [];

// MAX NUMBER OF GUESSES
var numberOfGuessesValue = 12;

// IDENTIFY #js-user-guess ON PAGE
var userGuessID = document.getElementById("js-user-guess");

// IDENTIFY #js-number-of-guesses ON PAGE
var numberOfGuessesID = document.getElementById("js-number-of-guesses");

// IDENTIFY #js-user-guess-correct ON PAGE
// var userGuessCorrect = document.getElementById("js-user-guess-correct");
var userGuessCorrect = document.getElementById("js-current-word");


// IDENTIFY #js-user-guess-incorrect ON PAGE
var userGuessIncorrect = document.getElementById("js-user-guess-incorrect");

// IDENTIFY END OF GAME
var noGuessesLeft = function () {
    // if no guesses remaining set alert
    if (numberOfGuessesValue === 0) {
        alert("No more guesses!");
    }
};

var updateNumberOfGuessesValue = function () {
    // UPDATE NUMBER OF GUESSES
    if (numberOfGuessesValue > 0) {
        numberOfGuessesValue--;
        numberOfGuessesID.textContent = numberOfGuessesValue;
    }
    // WHEN 0 GUESSES ALERT USER
    setTimeout(function () {
        noGuessesLeft();
    }, 50);

};

// SET NUMBER OF GUESSES 
var gameSetup = function () {
    numberOfGuessesID.textContent = numberOfGuessesValue;
    alert("Let the game of Hangman begin! You have 12 guesses. Good luck!");

};

// CREATES ARRAY VALUE FOR answerWordArray
var makeAnswerWordArray = function () {

    var emptyArray = answerWord;
    for (var i = 0; i < emptyArray.length; i++) {

        answerWordArray.push(emptyArray.charAt(i));

    }

};

// IS userGuessValue  INCLUDED IN answerWordArray? 
var isInArray = function (value, array) {
    return array.indexOf(value) > -1;
};


var guessedLetters = [];
var guessingWord = []; // This will be the word we actually build to match the current word
var printAnswer = function () {
    // Build the guessing word and clear it out
    for (var i = 0; i < answerWord.length; i++) {
        guessingWord.push("_");
    }
}
// Updates the display on the HTML Page
var guessingWordText = "";

function updateDisplay() {

    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    userGuessCorrect.innerText = guessingWordText;

};


// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < answerWord.length; i++) {
        if (answerWord[i] === letter) {
            positions.push(i);
        }

    }

    for (var i = 0; i < positions.length; i++) {

        // set variable to whatever string is in #js-current-word
        var currentString = document.getElementById("js-current-word").innerHTML;

        // update variable to include letter guessed
        var currentString = currentString.replaceAt(positions[i], letter);

        // update content of #js-current-word with new variable
        userGuessCorrect.innerText = currentString;


        // UNSUCESSFUL ATTEMPT TO DETERMINE IF CORRECT WORD WAS GUESSED
        // currentString has underscores
        // currentString.innerHTML = _;

        // function hasUnderscores() {
        //     //validation code
        //     document.getElementById("js-current-word").innerHTML = "_";
        //     return true;
        // }

        // if (hasUnderscores()) {
        //     //Another function code
        //     console.log("sure does");
        // } else {
        //     console.log("sure does NOT");
        // };


    }

};




// START GAME
document.onkeyup = function (event) {

    gameSetup();

    makeAnswerWordArray();

    printAnswer();

    updateDisplay();

    document.onkeyup = function (event) {

        // record keystroke as variable
        // not sure why this won't work outside this function
        var userGuessLetter = event.key;

        // CREATE FUNCTION CHECK userGuessLetter
        // userGuessLetter needs to be checked to make sure it is a letter. Could be crossed reference with a array of alphabet letters.
        // if userGuessLetter is not a letter, do nothing
        // if userGuessLetter is a letter and is not lowercase, convert to lowercase before checking to see if letter is in word        


        if (isInArray(userGuessLetter, answerWordArray)) {

            // alert("correct guess");

            evaluateGuess(userGuessLetter);

            // checkForWin();

        } else {

            // alert("incorrect guess");

            var existingWrongLetters = userGuessIncorrect.innerHTML;

            // explained  by Andrey, how to append new letters instead of just replace existing content. the below code will not work. it is psuedo code.
            // element.textContent = element.textContent + 'b';
            userGuessIncorrect.textContent = existingWrongLetters + " " + userGuessLetter;

            updateNumberOfGuessesValue();

            // console.log(answerWordArray);

        };

    };

};


// GENERAL RULES
// arrays are for looping
// objects are for calling specific properties

// WHISTLES AND BELLS THAT COULD BE ADDED
//////// before user presses key to start game, all other elements in <section> tag have .hidden class applied // after user starts game, "PRESS ANY KEY TO GET STARTED!" has hidden class applied and all other elements in <section> tag have .hidden class removed
//////// <footer> tag should be sticky so copyright stays at bottom of page
/////// deal with issue of h2#js-user-guess-incorrect changing height when user makes first guess // possible solution: <p> tag for h2#js-user-guess-incorrect should contain &nbsp; when game initializes. when user makes FIRST guess only, instead of appending guess to existing content, overwrite the &nbsp; content so it doesn't appear as a guess // another possible solution: have a <span> tag in the h2#js-user-guess-incorrect that has tall content like | and set the the opacity to 0
