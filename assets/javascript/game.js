
//  Refer to in class exercise to figure out how to start game by hitting the key. Rock paper scissors game. 

//  Refer to demo in class that so if you hear the key and he shows up on the screen. 

//  For number of gases, anytime a key is pressed after the game starts the number of gases decrements by i—.  As opposed to i++ that we have been using in class so far. 

///////////////////////////////////

//  Write the code easiest to hardest. First, do the thing with the game starts when you press a key. Second, do the thing where number of gases decrements every time a key is hit. 

///////////////////////////////////




//  Key is pressed to start game 

//  this can be changed to an array if more answers are needed 
//  other answers might be teacher, books, classroom, pencils, paper, eraser
var  answer = "chalkboard";

//  create array from letters in answer 
// https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters
var correctLetters;


//  initially set to 12 but will be decremented with each guess (each  time the key is hit after the start of the game ) 
var numberOfGuesses = 12;



//  originally set to zero but will be incremented with every win 
var wins;
















/////////////////////////


// create one word that is going to be guessed. 
    // figure out later if we need to do more.

// number of guesses allowed is 12

// usr presses key to start game



// user hits key to guess
    // "Number of Guesses Remaining" decreases by 1
    // script checks to see if letter is in word
        // if letter is NOT in word, letter displays under "Letters Already Guessed"
        // if letter IS in word, it appears in the appropriate place/places under "Current Word"

// game ends when word is guessed or no guesses remain
    // WIN if word is guessed, 
        // number under "Wins" increases by 1
        // word appears above 
    // LOSS (video doesn't say) Next game starts??????