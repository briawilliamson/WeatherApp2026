function refreshWeather(response) {
    let tempertureElement = document.querySelector("#temp");
    let tempertureElement = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let fahrenheitElement = document.querySelector("#fahrenheit");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    console.log(response.data.conditions.description);

tempertureElement.innerHTML = Math.round(temperature);
cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}mph`;
timeElement.innerHTML = formateDate(date);
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"`
}
function formatDate(date) {
    let minutes = data.getMinutes();
    let hours = date.getHours();
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[date.getDay()];

if (minutes < 10) {
    minutes = `0$(minutes)`;
}

return `${day} ${hours} :${minutes}`
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