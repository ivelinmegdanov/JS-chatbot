const API_KEY = "7edd01932dea97afedb8cc2292c7695e";
const city = "Varna";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

function returnWeather() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      response.innerHTML += `<p>Chatbot: The weather in ${city} is ${weather}</p>`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
