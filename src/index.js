function refreshWeather(response) {
    let tempElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let fahrenheitElement = document.querySelector("#fahrenheit");
    let timeElement = document.querySelector("#time");

    let temp = response.data.time;

    let timestamp = response.data.time;
    let date = new Date(timestamp * 1000);
    
let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
};

    console.log(response.date);

cityElement.innerHTML = response.data.city;
timeElement.innerHTML ="Thursday 8:00pm";
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`
timeElement.innerHTML = date.toLocaleString("en-US", options);

tempElement.innerHTML = Math.round(temp);

fahrenheitElement.innerHTML = "°F";
}

function searchCity(city) {
    let apiKey = "0o5be24a9etfa3a41b3e03ff5892ac86";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector ("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Indianapolis");