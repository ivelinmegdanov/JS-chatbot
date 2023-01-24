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

const randomBotResponse = [
  { text: "Oh my!", chance: 0.5 },
  { text: "Мхм...", chance: 0.5 },
  { text: "Yeah dude, I feel that..", chance: 0.5 },
  { text: "...", chance: 0.5 },
  { text: "Zzzzz", chance: 0.1 },
]

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