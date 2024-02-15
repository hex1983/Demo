// create functions with basic function structure

// function addNumbers (a, b) {
//     return a + b;
// }

// console.log(addNumbers(4,5));

// Function with default Perameters

// function addNumberWithDefault(a, b = 0) {
//     return a + b;
// }

// console.log(addNumberWithDefault(5, 9));

// Function with error handling

// function checkIfNumber(value) {
//     if (typeof value !== 'number') {
//         throw new Error("Input must be a number cuh!!");
//     }
//     return value;
// }

// // test cases
// try {
//     console.log(checkIfNumber(42));
//     console.log(checkIfNumber("not a number"));
// } catch (error) {
//     console.error(error.message);
// }

// Function with a callback

// Your implementation here
// function initializeDatabaseConnection() {
//     // Simulating a database connection string
//     return "mongodb://localhost:27017/mydatabase";
// }

// Explanation: ^^^

// This block defines a function named initializeDatabaseConnection.
// The function is a placeholder to simulate the initialization of a database connection.
// In this example, it simply returns a mock database connection string ("mongodb://localhost:27017/mydatabase").

// function executeCallBack(callback) {
//     // Preprocessing operations
//     let dbConnection = initializeDatabaseConnection();
//     console.log("Initialized database connection", dbConnection);

//     callback(dbConnection);
// }

// Explanation: ^^^

// This block defines a function named executeCallBack that takes a callback function (callback) as a parameter.
// Inside the function, it performs preprocessing operations:
// It calls initializeDatabaseConnection to get the database connection.
// It logs the initialized database connection using console.log.
// It then invokes the provided callback (callback(dbConnection)), passing the initialized database connection as an argument to the callback.


// Example of a callback function that uses the database connection
// function myCallBack(databaseConnection) {
//     console.log("Callback executed with database connections:", databaseConnection);
// }

// Explanation: ^^^

// This block defines an example callback function named myCallBack.
// The callback function takes a parameter (databaseConnection) representing the database connection.
// Inside the function, it logs a message indicating that the callback has been executed along with the received database connection.


// Calling executeCallBack with myCallBack
// executeCallBack(myCallBack);

// Explanation: ^^^

// This block calls the executeCallBack function with myCallBack as an argument.
// As a result, the executeCallBack function is executed:
// It initializes the database connection.
// Logs the initialized connection.
// Calls the provided callback (myCallBack) with the database connection.
// The callback function (myCallBack) is then executed, logging a message with the received database connection.

// Overall Flow:
// 1.The script starts by defining a function to initialize a database connection.
// 2.Another function (executeCallBack) is defined to execute a callback after performing some preprocessing.
// 3.An example callback function (myCallBack) is defined to log a message using the received database connection.
// 4.The executeCallBack function is called with the example callback (myCallBack).
// 5.During execution, the script simulates initializing a database connection, logs the connection, and then executes the provided callback function.

// The result is output to the terminal, indicating the initialization and usage of the mock database connection.

// Function with Error Handling

// function executeCallBack(callback) {
//     try {
//         let result = performOperation();

//         callback(result);
//     } catch (error) {
//         console.error("Error occured during callback execution", error.message);
//     }
// }

// Explanation: ^^^

// This block defines a function named executeCallBack that takes a callback function (callback) as a parameter.
// Inside the function, it uses a try...catch block to handle potential errors.
// It attempts to perform an operation by calling performOperation.
// If the operation is successful, it calls the provided callback with the result (callback(result)).
// If an error occurs during the operation, the catch block is executed. It logs an error message to the console using console.error along with the error message.

// Example of a callback funtion
// function myCallBack(data) {
//     console.log("Callback executed with data:", data);
// }

// Explanation: ^^^

// This block defines an example callback function named myCallback.
// The callback function takes a parameter (data) representing the result of an operation.
// Inside the function, it logs a message indicating that the callback has been executed along with the received data.


// Example of a function that may throw an error
// function performOperation() {
//     // Simulating an operation that might throw an error
//     if (Math.random() < 0.5) {
//         throw new Error("Random error occured");
//     }
//     return "Operation result";
// }

// Explanation: ^^^

// This block defines an example function named performOperation.
// The function simulates an operation that might throw an error. It uses Math.random() to generate either a successful result or an error.
// If the randomly generated value is less than 0.5, it throws an Error with the message "Random error occurred."
// Otherwise, it returns a successful result string.

// Calling executeCallBack with myCallBack
// executeCallBack(myCallBack);

// Explanation: ^^^

// This block calls the executeCallBack function with myCallback as an argument.
// As a result, the executeCallBack function is executed:
// It attempts to perform the operation using performOperation.
// If an error occurs, it catches the error and logs an error message.
// If no error occurs, it calls the provided callback (myCallback) with the operation result.
// The example callback function (myCallback) is then executed, logging a message with the received data.

// Overall Flow:

// The script starts by defining a function (performOperation) that simulates an operation that may throw an error.
// Another function (executeCallBack) is defined to execute a callback function with error handling.
// An example callback function (myCallback) is defined to log a message using the received data.
// The executeCallBack function is called with the example callback (myCallback).
// During execution, the script simulates the operation, handles errors, and executes the callback function based on the result.
// The output in the terminal will depend on whether the simulated operation succeeds or throws an error. The script is designed to randomly generate either outcome.

// Function to return 2 Smallest numbers

// function findTwoSmallestNumbers(arr) {
//     // Sort the array in ascending order
//     const sortedArray = arr.sort((a, b) => a - b);
//     //Return an array containing the first two elements (Smallest values)
//     return [sortedArray[0], sortedArray[1]];
// }

// Test Case 1
// const input1 = [10, -5, 8, 3, -7];
// const output1 = findTwoSmallestNumbers(input1);
// console.log(output1) // Output should be [-7, -5]

// Test Case 2
// const input2 = [1, -2, 5, -3, 8];
// const output2 = findTwoSmallestNumbers(input2);
// console.log(output2); // Output should be [-3, -2]


// Function to return 2 largest numbers

// function findTwoLargestNumbers(arr) {
//     // Sort the array in descending order
//     const sortedArray = arr.sort((a, b) => b - a);
//     //Return an array containing the first two elements (Smallest values)
//     return [sortedArray[0], sortedArray[1]];
// }

// Test Case 3
// const input3 = [10, -5, 8, 3, -7];
// const output3 = findTwoLargestNumbers(input3);
// console.log(output3) // Output should be [10, 8]

// Test Case 4
// const input4 = [1, -2, 5, -3, 8];
// const output4 = findTwoLargestNumbers(input4);
// console.log(output4); // Output should be [8, 5]

// Function to return sum of all positive numbers in an array

// function calculateSumOfPositives(arr) {
//     // Initialize a variable to store the sum of positive numbers
//     let sum = 0;
//     // Use a for loop to iterate through each element of the array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the current element is positive
//         if (arr[i] > 0) {
//             // add the positive element to the sum
//             sum += arr[i];
//         }
//     }
//     // return the calculated sum
//     return sum;
// }

// // Test Case 5
// const input5 = [1, -2, 5, -3, 8];
// const output5 = calculateSumOfPositives(input5);
// console.log(output5); // Output should be 14

// Question 1 

// function findTwoLargestNumbers(arr) {

//     const sortedArray = arr.sort((a, b) => b - a);

//     return [sortedArray[0], sortedArray[1]];

// };

// const input = [7, -2, 3, 4, 5, 1, 23, 31, 23];
// const output = findTwoLargestNumbers(input);
// console.log(output);

// const input2 = [7, -2, 3, 4, 5, 1, 23, 23];
// const output2 = findTwoLargestNumbers(input2);
// console.log(output2);

// Question 2

// Function to count strings based on their length
// function countStringsByLength(strings, numbers) {
//     // Check if the array of numbers is empty
//     if (numbers.length === 0) {
//         return 0; // If empty, return 0 as there are no valid lengths to match
//     }

//     let count = 0; // Initialize a counter to keep track of matching strings

//     // Iterate through each string in the array
//     for (let i = 0; i < strings.length; i++) {
//         // Check if the length of the current string is in the array of numbers
//         if (numbers.includes(strings[i].length)) {
//             count++; // Increment the count if the length is found
//         }
//     }

//     return count; // Return the final count of matching strings
// }

// // Sample input
// let strings = ["hello", "world", "tim", "a", "it", "butts", "needs", "I", "penis"];
// let numbers = [5, 1];

// // Sample output
// console.log(countStringsByLength(strings, numbers));


// Question 3

// function findLengthOfPassword(strings) {
//     let count = 0;
//     // Access the first element of the array and find its length
//     if (strings.length > 0) {
//         count = strings[0].length;
//     }

//     return count;
// }

// let strings = ["helloworld123*"];
// console.log(findLengthOfPassword(strings));

// Individual functions for length, uppercase, lowercase, interger count, special char count functions

// function countCapitalLetters(strings) {
//     let count = 0;

//     if (strings.length > 0) {
//         for (let i = 0; i < strings[0].length; i++) {
//             if (strings[0][i] >= "A" && strings[0][i] <= "Z") {
//                 count++;
//             }
//         }

//     }

//     return count;
// };

// let strings = ["helloworld123*"];
// console.log("Number of Capital Letters:");
// console.log(countCapitalLetters(strings));

// function countLowerCaseLetters(strings) {
//     let count = 0;

//     if (strings.length > 0) {
//         for (let i = 0; i < strings[0].length; i++) {
//             if (strings[0][i] >= "a" && strings[0][i] <= "z") {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// let strings1 = ["helloworld123*"];
// console.log("Number of Lowercase Letters:");
// console.log(countLowerCaseLetters(strings1));

// function countIntergers(strings) {
//     let count = 0;

//     if (strings.length > 0) {
//         for (let i = 0; i < strings[0].length; i++) {
//             if (!isNaN(parseInt(strings[0][i]))) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// let strings2 = ["helloworld123*"];
// console.log("Number of Intergers:");
// console.log(countIntergers(strings2));

// function countSpecialChar(strings) {
//     let count = 0;

//     const specialChar = ['%', '^', '&', '*', '(', ')', '@', '!', '#', '$'];

//     if (strings.length > 0) {
//         for (let i = 0; i < strings[0].length; i++) {
//             if (specialChar.includes(strings[0][i])) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// let strings3 = ["helloworld123*"];
// console.log("Number of Special Characters:");
// console.log(countSpecialChar(strings3)); 

// function findLengthOfPassword(strings) {
//     let count = 0;

//     // this loop iterates through each element in the array 
//     for (let i = 0; i < strings.length; i++) {
//         // Increment the count for each element not character in the string
//         count++;
//     }

//     return count;
// }

// let strings = ["helloworld123*", "MayraEsMiAmor21@$!"];
// console.log(findLengthOfPassword(strings));

// Combining all functions together 
// for length of string, uppercase, lowercase, specialchar count

// function analyzeString(string) {
    
//     function countCapitalLetters(str) {
//         let count= 0;

//         for (let i = 0; i < str.length; i++) {
//             if (str[i] >= "A" && str[i] <= "Z") {
//                 count++;
//             }
//         }

//         return count;
//     }

//     function countLowercaseLetters(str) {
//         let count = 0;

//         for (let i = 0; i < str.length; i++) {
//             if (str[i] >= "a" && str[i] <= "z") {
//                 count++;
//             }
//         }

//         return count;
//     }

//     function countIntegers(str) {
//         let count = 0;

//         for (let i = 0; i< str.length; i++) {
//             if (!isNaN(parseInt(str[i]))) {
//                 count++;
//             }
//         }

//         return count;
//     }

//     function countSpecialCharacters(str) {
//         const specialCharacters = ['%', '^', '&', '*', '(', ')', '@', '!', '#', '$'];
        
//         let count = 0;
        
//         for (let i = 0; i < str.length; i++) {
//             if (specialCharacters.includes(str[i])) {
//                 count++;
//             }
//         }
//         return count;
//     }

//     function analyze(str) {
//         const length = str.length;
//         const capitalLetters = countCapitalLetters(str);
//         const lowercaseLetters = countLowercaseLetters(str);
//         const integers = countIntegers(str);
//         const specialCharacters = countSpecialCharacters(str);

//         // Calculate the score based on the scoring criteria
//         let score = 0;
//         // Award 1 point for each criterion met.
//         if (length >= 10) {
//             score++;
//         }
//         if (capitalLetters > 0) {
//             score++;
//         }
//         if (lowercaseLetters > 0) {
//             score++;
//         }
//         if (integers > 0) {
//             score++;
//         }
//         if (specialCharacters > 0) {
//             score++;
//         }

//         // Determine the password strength based on the score
//         let strength;
//         if (score <= 2) {
//             strength = "Weak Password Cuh!";
//         } else if (score === 3) {
//             strength = "Medium Password Cuh!";
//         } else if (score === 4) {
//             strength = "Strong Password Cuh!";
//         } else if (score >= 5) {
//             strength = "Very Strong Password Cuh!";
//         }

//         return {
//             length,
//             capitalLetters,
//             lowercaseLetters,
//             integers,
//             specialCharacters,
//             score,
//             strength,
//         };
//     }

//     const result = analyze(string);
//     result.score = result.score || 0;
//     result.strength = result.strength || "Weak Password Cuh!";

//     return result;

// }

// let inputString = "helloworld123*";
// console.log(analyzeString(inputString));

// let inputString1 = "pass";
// console.log(analyzeString(inputString1));

// let inputString2 = "123!";
// console.log(analyzeString(inputString2));

// let inputString3 = "MayraEsMiAmor21@$!";
// console.log(analyzeString(inputString3));

// Sample question 4

// Input processing
// function calculateProductionTime(plantArray) {
//     // Data Structure design. Initialize an empty object {}
//     const result = {};

//     // Processing Steps iterate through each plant in array. extract plant id and production steps for each
//     for (const plant of plantArray) {
//         const plantId = plant.id;
//         const productionSteps = plant.productionSteps;
//         // set totalTime to 0 for each plant
//         let totalTime = 0;

//         // Loop through each production step of the plant
//         for (const step of productionSteps) {
//             // Calculate cumulative time for each step
//             totalTime += step.time;

//             // Output Generation
//             if (!result[plantId]) {
//                 result[plantId] = {};
//             }
//             result[plantId][step.step] = totalTime;
//         }
//     }

//     // Clean Code Principles
//     return result;

// }

// // Sample input
// const sampleInput = [
//     {
//         "id": "Plant1",
//         "productionSteps": [
//             {"step": "Step1", "time": 5},
//             {"step": "Step2", "time": 7},
//             {"step": "step3", "time": 2}
//         ]
//     },
//     {
//         "id": "Plant2",
//         "productionSteps": [
//             {"step": "StepA", "time": 3},
//             {"step": "StepB", "time": 4},
//             {"step": "StepC", "time": 8}
//         ]     
//     }
// ];

// // Call the function with sample input
// const result = calculateProductionTime(sampleInput);

// // Output the result
// console.log(result);


// Practice looping through objects

// function getRelativeNames(familyArray) {
//     const result = {};

//     for (const family of familyArray) {
//         const familyId = family.id;
//         const relatives = family.relatives;
        
//         if (!(familyId in result)) {
//             result[familyId] = {};
//         }

//         for (const sibling of relatives) {
//             result[familyId][sibling.sibling] = sibling.age;

//         }

//     }
//     return result;

// }

// const sampleInput1 = [
//     {
//         "id": "Family1",
//         "relatives": [
//             {"sibling": "Claudia", "age": 49},
//             {"sibling": "Laura", "age": 45},
//             {"sibling": "Luis", "age": 35},
//             {"sibling": "Christopher", "age": 26},
//             {"sibling": "Leslie", "age": 22},
//             {"sibling": "Margarita", "age": 21}
//         ] 
//     },
//     {
//         "id": "Family2",
//         "relatives": [
//             {"sibling": "Junior", "age": 36},
//             {"sibling": "Joshua", "age": 29},
//             {"sibling": "Stephanie", "age": 24}
//         ]
//     }
// ];

// const result = getRelativeNames(sampleInput1);

// console.log(result);

// Practice Functions, sum of scores, for loops

// function getTotalScores(teamScore) {
//     // Initializes an empty object that will store the total scores for each team
//     const result = {};
//     // Loop through each score object in the input array
//     // 'teamScore[0]' is used to access the first object in the array
//     for (const score of teamScore[0].score) {
//         // Extract team name and score from the current score object
//         const teamId = score.team;
//         const scoreId = score.score;

//         // Check if the team is already in the result object
//         if (!(teamId in result)) {
//         // If not, initialize the score for the team to 0
//             result[teamId] = 0;
//         }
//         // Accumulate the score for the team
//         result[teamId] += scoreId;

//     }
//     // Return the final result object containing the total score for each team
//     return result;


// }

// // Sample input

// const sampleInput2 = [
//     {
//         "id": "Team",
//         "score": [
//             {"team": "TeamA", "score": 10},
//             {"team": "TeamB", "score": 8},
//             {"team": "TeamC", "score": 12},
//             {"team": "TeamA", "score": 5},
//             {"team": "TeamB", "score": 4},
//             {"team": "TeamC", "score": 1},
//             {"team": "TeamA", "score": 10},
//             {"team": "TeamB", "score": 8},
//             {"team": "TeamC", "score": 2},
//         ] 
//     }
// ];


// // Sample output
// const sampleOutput2 = {
//     "TeamA": 25,
//     "TeamB": 20,
//     "TeamC": 15,
// }

// const result = getTotalScores(sampleInput2);

// console.log(result);

// Chat GPT prompt sample questions
// Function to calculate the area of a rectangle

// function calculateAreaOfRectangle(length, width) {
//     // Ensure non-negative values are used
//     if (length < 0 || width < 0) {
//         return "Invalid input. Length and width must be non-negative."
//     }

//     // calculate and return the area
//     return length * width;

// }

// // Sample test case
// const area = calculateAreaOfRectangle(5,8);
// console.log(area);

// Expense tracker 

const expenseNamePrompt = "Enter an expense name: ";
const expenseNameInput = prompt(expenseNamePrompt);


// Prompt user for an expense amount
const expenseAmountPrompt = "Enter an expense amount Cuh: ";
const expenseAmountInput = prompt(expenseAmountPrompt);

// Convert the input to a number
const expenseAmount = parseFloat(expenseAmountInput);

// Check if the entered value is a valid number
if (isNaN(expenseAmount)) {
  console.log("Invalid input. Please enter a number Cuh!");
} else {
  // Continue with the calculation
  const expenses = [
    // { description: "Groceries", amount: 50 },
    // { description: "Eating out", amount: 30 },
    { description: expenseNameInput, amount: expenseAmount },
  ];

  function calculateTotalExpense(expenses) {
    let total = 0;

    for (const expense of expenses) {
      // Check if expense.amount is not a number
      if (isNaN(expense.amount)) {
        return "Invalid input. Please enter a number!";
      }

      // Add the valid expense amount to the total
      total += expense.amount;
    }

    return total;
  }

  // Sample Call
  const totalExpense = calculateTotalExpense(expenses);

  // Sample Output
  console.log("Total Expenses:");
  console.log(totalExpense);

  document.body.innerHTML = `<h2>Total Expenses: $${totalExpense}</h2>`;}


