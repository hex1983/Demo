// Define an array of questions with answer choices
const questions = [
    {
        question: "Who is the lead singer of WHAM?",
        choices: ["Paul Newman", "Gloria Estefan", "Steve Jobs", "George Michael"],
        correctAnswer: "George Michael"
    },
    {
        question: "What is the name of Metallica's debut Album?",
        choices: ["And Justice for All", "Ride the Lightning", "Master of Puppers", "Kill'Em All"],
        correctAnswer: "Kill'Em All"
    },
    {
        question: "What was Freddie Mercury's real name?",
        choices: ["Frederick Mendez", "Frank Castalaneda", "Farrokh Bulsara", "Kenneth James"],
        correctAnswer: "Farrokh Bulsara"
    },
    {
        question: "Who was the first American Idol winner?",
        choices: ["Kelly Clarkdaugther", "Quincy Jones", "Kelly Clarkson", "Paul Studdard"],
        correctAnswer: "Kelly Clarkson"
    },
    {
        question: "Which member of the Avengers had a brief stint as a pop star?",
        choices: ["Scarlett Johansson", "Brie Larson", "Karen Gillan", "Zoe Saldana"],
        correctAnswer: "George Michael"
    },
    {
        question: "What pop star wrote songs for Ariana Grande, Miley Cyrus, Britney Spears and Alice Cooper?",
        choices: ["Lady Gaga", "Whitney Houston", "Kesha", "Adel"],
        correctAnswer: "Kesha"
    },
    {
        question: "In 'The Big Lebowski', The Dude can't stand which band?",
        choices: ["The Scorpions", "The Eagles", "The Beatles", "The Monkey's"],
        correctAnswer: "The Eagles"
    },
    {
        question: "Who founded Motown Records?",
        choices: ["Paul Anka", "Diddy", "Berry Gordy", "George Michael"],
        correctAnswer: "Berry Gordy"
    },
    {
        question: "What was Modonna's first top 10 hit?",
        choices: ["Like a Prayer", "Material Girl", "Like a Virgin", "Holiday"],
        correctAnswer: "Holiday"
    },
    {
        question: "Who is was Marvin Gaye's duet partner?",
        choices: ["Tammi Terrell", "Paul McCartney", "Bob Dillan", "Little Richard"],
        correctAnswer: "Tammi Terrell"
    },
    // Add more questions similarly
];

let currentQuestion = 0;
let score = 0;

// Hide the quiz container initially
document.getElementById("quiz-container").style.display = "none";

// Event listener for the start button
document.getElementById("start").addEventListener("click", startQuiz);

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

// Event listener for the quit button
document.getElementById("quit").addEventListener("click", displayScore);

// Function to display current question and answer choices
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

// Function to check user's answer and move to the next question
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
            // All questions answered, display the final score
            displayScore();
        }
    }
}

// Function to display the final score
function displayScore() {
    const questionContainer = document.getElementById("question-container");
    const btnContainer = document.querySelector(".btns");

    questionContainer.innerHTML = `<p>Your score: ${score} out of ${questions.length}</p>`;
    btnContainer.style.display = "none"; // Hide the submit and quit buttons
}

// Function to start the quiz
function startQuiz() {
    // Show the quiz container
    document.getElementById("quiz-container").style.display = "block";

    // Remove the start button
    document.getElementById("start-container").style.display = "none";

    // Display the first question
    displayQuestion();
}

// Initial display of the start container
document.getElementById("quiz-container").style.display = "none"; // Make sure the quiz container is hidden initially
document.getElementById("start-container").style.display = "block"; // Display the start container initially
