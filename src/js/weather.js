const API_KEY = "98e32565d773a46b1ce78a9981c6eb6e";
const weather = document.querySelector(".weather-info")
const currentLocation = document.querySelector(".location-info")
const latitude = document.querySelector(".latitude")
const longitude = document.querySelector(".longitude")

function success(position) {
    const latData = position.coords.latitude
    const lonData = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latData}&lon=${lonData}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = data.weather[0].description;
            currentLocation.innerText = data.name;
        })
}

function error() {
    alert("failed")
}

navigator.geolocation.getCurrentPosition(success, error);
