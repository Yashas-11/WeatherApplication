document.addEventListener("DOMContentLoaded", function () {
  var myInput = document.getElementById("myInput");

  myInput.addEventListener("click", function () {
      console.log("Input Clicked");
      myInput.focus();
  });
});

const apiKey = 'c48397a5f3ed61855417f8122f7123b3';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

const searchBox = document.querySelector(".cityInput");
const cityNameElement = document.querySelector(".cityName");
const weatherIcon = document.querySelector(".weatherImage");

async function checkWeather(city) {
  const response = await fetch(apiURL + '&q=' + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  cityNameElement.innerHTML = data.name;
  document.querySelector(".weatherDescription").innerHTML = data.weather[0].description + ".";
  document.querySelector(".temperatureDisplay").innerHTML = Math.round(data.main.temp) + "&deg;";
  document.querySelector(".temperatureMaximum").innerHTML = Math.round(data.main.temp_max) + "&deg;";
  document.querySelector(".temperatureMinimum").innerHTML = Math.round(data.main.temp_min) + "&deg; /";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".pressure").innerHTML = data.main.pressure  + " Pa";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

  document.querySelector(".temperature").style.display = "flex";
  document.querySelector(".weatherInformation").style.display = "flex";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Images/mist.png";
  }
}

searchBox.addEventListener("keyup", () => {
  checkWeather(searchBox.value);
});
