const input = document.getElementById("user-input");
const response = document.getElementById("chatbot-response");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let userInput = input.value;
    input.value = "";
    response.innerHTML += `<p class="myMessage">${userInput}</p>`
    if (userInput === "боте, кво запомни?") {
      returnNotes();
    } else if (userInput.startsWith("боте, запомни в")) {
      takeNotes(userInput);
    } else if (userInput.startsWith("боте, махни")) {
      removeNotes(userInput);
    } else if (greetingInput.includes(userInput)) {
      if(userInput === "Hello"){
        const randomNum = Math.random();
        if (randomNum > 0.5) {
          response.innerHTML += `<p>${getRandomResponse(helloResponse)}</p>`;
        } else {
          response.innerHTML += `<p>${getRandomResponse(greetingResponse)}</p>`;
        }
      } else {
        response.innerHTML += `<p>${getRandomResponse(greetingResponse)}</p>`;
      }
    } else if (userInput === "аз обичам") {
      response.innerHTML += `<p>${getRandomResponse(loveResponse)}</p>`;
    } else {
      response.innerHTML += "<p>Не намирам тая команда бе брат, дай по сериозно!</p>";
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
});