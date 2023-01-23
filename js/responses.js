// Used for timeResponse
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const formattedTime = hours + ":" + minutes;

// Possible responses
const greetingResponse = [
  { text: "Hey, I'm bot", chance: 1 },
  { text: "Здрастииии", chance: 1 },
  { text: "Heya!", chance: 1 },
  { text: "Добро утроо", chance: 1 },
  { text: "Здравей!", chance: 1 },
  { text: "Пак ли ти бе...", chance: 0.1 },
];

const helloResponse = [
  { text: "from the other sideee", chance: 0.5 },
  { text: "is it me you're looking for?", chance: 0.5 },
];

const loveResponse = [
  { text: "Кондьо", chance: 0.5 },
  { text: "Джена", chance: 0.5 },
  { text: "Джорджано", chance: 0.5 },
  { text: "Гери и Никол", chance: 0.5 },
];

const trollNote = [
  { text: "да ъпгрейдна бота", chance: 0.5 },
  { text: "да си гледам работата!", chance: 0.5 },
  { text: "да спра да занимавам бота с глупости", chance: 0.5 },
  { text: "да си пусна новата песен на Криско", chance: 0.5 },
];

const timeResponse = [
  { text: "абе май е " + formattedTime, chance: 0.5 },
  { text: "абе май е 12:45", chance: 0.1 },
  { text: "Шес бес десет, няма бе, " + formattedTime + " е...", chance: 0.5 },
  { text: "Ако умножиш {X} по {Y} ще получиш unix timestamp, който лесно можеш сам да си пресметнеш и да получиш текущата дата", chance: 0.1 },
];

// Gets random response from one of the categories with different chance
function getRandomResponse(responses) {
  let total = responses.reduce((acc, val) => acc + val.chance, 0);
  let randomNum = Math.random() * total;
  for (let i = 0; i < responses.length; i++) {
      randomNum -= responses[i].chance;
      if (randomNum <= 0) {
          return responses[i].text;
      }
  }
}