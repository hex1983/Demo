// Practice using parseFloat in different use cases

const prompt = require("prompt-sync")();

while (true) {
// Prompt the user to enter a number
        const userInput = prompt("Enter a number: ");

// Check if userInput is null (if the user cancels the prompt) or an empty string
    if (userInput === null || userInput.trim() === "") {
        console.log("Input is empty or cancelled. Please enter a valid number.");
    } else {
    // Attempt to parse the user input into a numeric value
        const numericValue = parseFloat(userInput);

    // Check if numericValue is NaN (indicating invalid input)
        if (isNaN(numericValue)) {
         console.log("Invalid input. Please enter a valid number.");
        } else {
        // Print the parsed numeric value
            console.log("Parsed numeric value:", numericValue);
        }
    }
};

