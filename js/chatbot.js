var input = document.getElementById("user-input");
var response = document.getElementById("chatbot-response");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var userInput = input.value;
    input.value = "";
    response.innerHTML += `<p class="myMessage">${userInput}</p>`
    if (userInput === "боте, кво запомни?") {
      returnNotes();
    } else if (userInput.startsWith("боте, запомни в")) {
      takeNotes(userInput);
    } else if (userInput.startsWith("боте, махни")) {
      removeNotes(userInput);
    } else if (greetingInput.includes(userInput)) {
      response.innerHTML += `<p>${getRandomResponse(greetingResponse)}</p>`;
    } else {
      response.innerHTML += "<p>Не намирам тая команда бе брат, дай по сериозно!</p>";
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
});