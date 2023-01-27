const API_KEY = "1a260e62e35f609f529a1b306a7d3e0b";
const city = "Varna";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=bg&units=metric`;

function returnWeather() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const windDirection = data.wind.deg;
      const windSpeed = data.wind.speed;
      const weatherDescription = data.weather[0].description;

      const temp = Math.round(data.main.temp);

      weatherResponses = [
        {text: `Температурата е ${temp} градуса.`, chance: 1},
        {text: `В момента е ${weatherDescription}.`, chance: 1},
        {text: `За тези, които ги мързи да погледнат през прозореца - вън е ${weatherDescription}.`, chance: 0.2},
        {text: `(Наплюнчва пръст и го показва през прозореца) Усещам вятър в посока ${windDirection}°, около ${windSpeed} метра в секунда.`, chance: 1}
      ];

      if (temp < 0) {
        weatherResponses.push({text: `Вън е ${temp} градуса, егати студа!`, chance: 1});
      } else if (temp > 30) {
        weatherResponses.push({text: `${temp} градуса, как живеете вие в тая жега, добре че съм бот!`, chance: 1});
      }

      response.innerHTML += `<p>${getRandomResponse(weatherResponses)}</p>`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
