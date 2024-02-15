const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!")

const answer1 = prompt("What is the brain of the computer? ");

const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct!");
} else {
    console.log("You got it wrong...Dumbass!")
}

const answer2 = prompt("What is better a 3090ti or a 4060? ");

const correct_answer2 = "3090ti";

if (answer2.toLowerCase() === correct_answer2) {
    console.log("You got it correct!");
} else {
    console.log("You got it wrong...Dumbass!")
}

