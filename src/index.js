function refreshWeather(response) {
    let tempElement = document.querySelector("#temp");
    let temp = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("description");

    console.log(response.data.condition.description);
cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
tempElement.innerHTML = Math.round(temp);

    let fahrenheitElement = document.querySelector("#farenheit");
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