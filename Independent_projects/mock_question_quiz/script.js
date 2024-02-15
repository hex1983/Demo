// Define an array of questions with answer choices
const questions = [
    {
        question: "What is 2 + 2 equal to?",
        choices: ["one", "four", "nine", "infinity"],
        correctAnswer: "four"
    },
    {
        question: "How many months in a calendar year?",
        choices: ["11", "14", "13", "12"],
        correctAnswer: "12"
    },
    {
        question: "How many letters in the English Alphabet?",
        choices: ["21", "22", "4000", "26"],
        correctAnswer: "26"
    },
    {
        question: "What is 2 X 2 equal to?",
        choices: ["90", "8", "3", "4"],
        correctAnswer: "4"
    },
    {
        question: "How many hours in one day on earth?",
        choices: ["22", "36", "90", "24"],
        correctAnswer: "24"
    },
];

let currentQuestion = 0;
let score = 0;

document.getElementById("quiz-container").style.display = "none";

document.getElementById("start").addEventListener("click", startQuiz);

document.getElementById("submit").addEventListener("click", checkAnswer);

document.getElementById("quit").addEventListener("click", displayScore);

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const answerContainers = document.getElementsByClassName("radio-answers")[0].getElementsByTagName("div");

    questionContainer.innerHTML = `<p>${questions[currentQuestion].question}</p>`;

    for (let i = 0; i < answerContainers.length; i++) {
        answerContainers[i].innerHTML = `
            <input type="radio" id="radio${i + 1}" name="answer" value="${questions[currentQuestion].choices[i]}">
            <label for="radio${i + 1}">${questions[currentQuestion].choices[i]}</label><br>
        `;
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayScore();
        }
    }
}

function displayScore() {
    const questionContainer = document.getElementById("question-container");
    const btnContainer = document.querySelector(".btns");

    questionContainer.innerHTML = `<p>Your Score: ${score} Out of ${questions.length}</p>`;
    btnContainer.style.display = "none"; // Hide the submit and quit buttons
}

// Function to start the quiz
function startQuiz() {
    // Display the quiz container
    document.getElementById("quiz-container").style.display = "block";

    // Remove the start button
    document.getElementById("start-container").style.display = "none";

    // Display the first question
    displayQuestion();
}

// Initial display of the start container
document.getElementById("quiz-container").style.display = "none"; // Make sure the quiz container is hidden initially
document.getElementById("start-container").style.display = "block"; // Display the start container initially
