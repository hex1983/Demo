function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = randomNum(1, 100);
let numGuesses = 0;

function reset() {
    num = randomNum(1, 100);
    numGuesses = 0;
    document.getElementById("num-guesses").innerHTML = 0;
}

function makeGuess() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    guessInput.value = "";
    const feedback = document.getElementById("feedback");

    numGuesses++;
    document.getElementById("num-guesses").innerHTML = numGuesses;

    if (guess === num) {
       feedback.innerHTML = "You guessed it";
       reset();
   } else if (guess > num) {
    feedback.innerHTML = "It is lower.";
   } else {
    feedback.innerHTML = "It is higher.";
   }
}
