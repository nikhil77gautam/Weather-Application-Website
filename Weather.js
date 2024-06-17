const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "c7da717ecf8d7f77687a8e9dcd743c2b";

$(document).ready(function () {
  weatherFn("Pune");
});

async function weatherFn(cName) {
  const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(temp);
    const data = await res.json();
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weatherShowFn(data) {
  $("#city-name").text(data.name);
  $("#date").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#temperature").html(`${data.main.temp}°C`);
  $("#description").text(data.weather[0].description);
  $("#wind-speed").html(`Wind Speed: ${data.wind.speed} m/s`);
  $("#weather-icon").attr("src", `...`);
  $("#weather-info").fadeIn();
}

cityName.textContent = json.name;
date.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");

switch (json.weather[0].main) {
  case "Clear":
    weatherIcon.src = "Image/weather-clear.jpg";
    break;
  case "Rain":
    weatherIcon.src = "Image/rainy-weather.jpg";
    break;
  case "Snow":
    weatherIcon.src = "Image/Weather-snow.png";
    break;
  case "Clouds":
    weatherIcon.src = "Image/clouds-icon.png";
    break;
  case "Mist":
    weatherIcon.src = "Image/mist.png";
    break;
  case "Haze":
    weatherIcon.src = "Image/haze.png";
    break;
  default:
    weatherIcon.src = "Image/weather-clear.jpg";
}

temperature.textContent = `${parseInt(json.main.temp)}°C`;
description.textContent = json.weather[0].description;
windSpeed.textContent = `Wind Speed: ${parseInt(json.wind.speed)} Km/hr`;

weatherInfo.style.display = "block";
