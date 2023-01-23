const greetingResponse = [
  { text: "Hey, I'm bot", chance: 0.8 },
  { text: "Здрастииии", chance: 0.9 },
  { text: "Heya!", chance: 0.7 },
  { text: "Добро утроо", chance: 0.95 },
  { text: "Здравей!", chance: 0.7 },
  { text: "Пак ли ти бе...", chance: 0.1 },
];


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