const input = document.getElementById("user-input");
const response = document.getElementById("chatbot-response");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    const userInputLower = input.value.toLowerCase();
    const userInput = input.value;
    input.value = "";

    response.innerHTML += `<p class="myMessage">${userInput}</p>`;

    if (userInputLower === "боте, кво запомни?") {
      returnNotes();
    } else if (userInputLower.startsWith("боте, запомни в")) {
      takeNotes(userInput);
    } else if (userInputLower.startsWith("боте, махни")) {
      removeNotes(userInput);
    } else if (greetingInput.includes(userInputLower)) {
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
    } else if (weatherInput.includes(userInputLower)) {
      returnWeather();
    } else if (timeInput.includes(userInputLower)) {
      returnTime();
    } else if (userInputLower === "аз обичам") {
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
