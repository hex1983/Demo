// Create a simple counter
// 1. Count starts at 0
// 2. Counter must + from 0 by increments of 1
// 3. Counter must - from current number by 1 and countinue
// 4. Button to RESET counter back to 0

let counterValue = 0

function startCounter() {
    var resultText = document.getElementById("number-display").getElementsByTagName("h1")[0];
    resultText.innerHTML = "GO!";
    counterValue = 0;

}

function addCounter() {
    counterValue += 1;
    var resultText = document.getElementById("number-display").getElementsByTagName("h1")[0];
    resultText.innerHTML = counterValue.toString();

}

function subtractCounter() {
    counterValue -= 1;
    var resultText = document.getElementById("number-display").getElementsByTagName("h1")[0];
    resultText.innerHTML = counterValue.toString();
}

function resetCounter() {
    var resultText = document.getElementById("number-display").getElementsByTagName("h1")[0];
    resultText.innerHTML = "0";
    counterValue = 0;

}
