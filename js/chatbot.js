const input = document.getElementById("user-input");
const response = document.getElementById("chatbot-response");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    response.innerHTML += `<p class="myMessage">${input.value}</p>`;
    let userInput = input.value.toLowerCase();
    input.value = "";
    if (userInput === "боте, кво запомни?") {
      returnNotes();
    } else if (userInput.startsWith("боте, запомни в")) {
      takeNotes(userInput);
    } else if (userInput.startsWith("боте, махни")) {
      removeNotes(userInput);
    } else if (greetingInput.includes(userInput)) {
      if (userInput === "hello") {
        const randomNum = Math.random();
        if (randomNum > 0.5) {
          response.innerHTML += `<p>${getRandomResponse(helloResponse)}</p>`;
        } else {
          response.innerHTML += `<p>${getRandomResponse(greetingResponse)}</p>`;
        }
      } else {
        response.innerHTML += `<p>${getRandomResponse(greetingResponse)}</p>`;
      }
    } else if (weatherInput.includes(userInput)) {
      returnWeather();
    } else if (timeInput.includes(userInput)) {
      returnTime();
    } else if (userInput === "аз обичам") {
      response.innerHTML += `<p>${getRandomResponse(loveResponse)}</p>`;
    } else {
      const randomNum = Math.random();
      if (randomNum < 0.2) {
        response.innerHTML += `<p>${getRandomResponse(randomBotResponse)}</p>`;
      }
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
});
