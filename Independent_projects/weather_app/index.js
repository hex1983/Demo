// Weather App

// const weatherForm = document.querySelector(".weatherForm");
// const cityInput = document.querySelector(".cityInput");
// const card = document.querySelector(".card");
// const apiKey = "46cab1ad2bca3477e215daadd5468cde";

// weatherForm.addEventListener("submit", async event => {

//     event.preventDefault();

//     const city = cityInput.value;

//     if (city) {
//         try{
//             const weatherData = await getWeatherData(city);
//             displayWeatherInfo(weatherData);

//         }
//         catch(error){
//             console.error(error);
//             displayError(error);
//         }

//     }
//     else{
//         displayError("Please enter a City");
//     }

// });

// async function getWeatherData(city) {

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     const response = await fetch(apiUrl);

//     console.log(response);

//     if (!response.ok) {
//         throw new Error("Could not fetch weather data");
//     }

//     return await response.json();

// }

// function displayWeatherInfo(data) {

//     const {name: city, 
//            main: {temp, humidity}, 
//            weather: [{description, id}]} = data;

//     card.textContent = "";
//     card.style.display = "flex";

//     const cityDisplay = document.createElement("h1");
//     const tempDisplay = document.createElement("p");
//     const humidityDisplay = document.createElement("p");
//     const descDisplay = document.createElement("p");
//     const weatherEmoji = document.createElement("p");

//     cityDisplay.textContent = city;
//     tempDisplay.textContent = `${((temp - 273.15)* (9 / 5) + 32).toFixed(1)}°F`;
//     humidityDisplay.textContent = `Humidity: ${humidity}%`;
//     descDisplay.textContent = description;
//     weatherEmoji.textContent = getWeatherEmoji(id);

//     cityDisplay.classList.add("cityDisplay");
//     tempDisplay.classList.add("tempDisplay");
//     humidityDisplay.classList.add("humidityDisplay");
//     descDisplay.classList.add("descDisplay");
//     weatherEmoji.classList.add("weatherEmoji");
    
//     card.appendChild(cityDisplay);
//     card.appendChild(tempDisplay);
//     card.appendChild(humidityDisplay);
//     card.appendChild(descDisplay);
//     card.appendChild(weatherEmoji);

// }

// function getWeatherEmoji(weatherId) {

//     switch(true){
//         case (weatherId >= 200 && weatherId < 300):
//             return "⛈️";
//         case (weatherId >= 300 && weatherId < 400):
//             return "🌧️";
//         case (weatherId >= 500 && weatherId < 600):
//             return "🌧️";
//         case (weatherId >= 600 && weatherId < 700):
//             return "❄️"; 
//         case (weatherId >= 700 && weatherId < 800):
//             return "🌫️";
//         case (weatherId === 800):
//             return "☀️";
//         case (weatherId >= 801 && weatherId < 810):
//             return "☁️";
//         default:
//             return "❓";   
//     }

// }

// function displayError(message) {

//     const errorDisplay = document.createElement("p");
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add("errorDisplay");

//     card.textContent = "";
//     card.style.display = "flex";
//     card.appendChild(errorDisplay);

// }


// Weather APP ChatGPT version with comments
// DOM elements
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "46cab1ad2bca3477e215daadd5468cde";

// Event listener for form submission
weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the city entered by the user
    const city = cityInput.value;

    if (city) {
        try {
            // Fetch weather data for the entered city
            const weatherData = await getWeatherData(city);

            // Display the weather information on the UI
            displayWeatherInfo(weatherData);
        } catch (error) {
            // Log and display an error if fetching weather data fails
            console.error(error);
            displayError(error);
        }
    } else {
        // Display an error if the city input is empty
        displayError("Please enter a City");
    }
});

// Function to fetch weather data from the OpenWeatherMap API
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Make a fetch request to the API
    const response = await fetch(apiUrl);

    console.log(response);

    // Check if the response is successful; otherwise, throw an error
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    // Return the JSON data from the response
    return await response.json();
}

// Function to display weather information on the UI
function displayWeatherInfo(data) {
    // Destructure data to extract relevant information
    const { name: city, 
            main: { temp, humidity }, 
            weather: [{ description, id }] } = data;

    // Clear existing card content and display weather information
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // Populate the created elements with weather information
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // Add appropriate styling to the created elements
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Append the elements to the card for display
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

// Function to get a weather emoji based on the weatherId
function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️";
        case weatherId >= 300 && weatherId < 400:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌧️";
        case weatherId >= 600 && weatherId < 700:
            return "❄️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId >= 801 && weatherId < 810:
            return "☁️";
        default:
            return "❓";
    }
}

// Function to display error messages on the UI
function displayError(message) {
    // Create a new paragraph element for the error message
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Clear any existing content in the card and display the error
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
