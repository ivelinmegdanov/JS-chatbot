function takeNotes(userInput) {
  //troll
  const trollChance = 0.05;
  let randomNum = Math.random();

  //input
  const inputArray = userInput.split("-");
  const list = inputArray[0].slice(16).trim();
  const note = inputArray[1].trim();
  const existing_notes = JSON.parse(localStorage.getItem("Tasks")) || {};
  const sublists = list.split(" ");
  
  let current_ref = existing_notes;

  for (let i = 0; i < sublists.length; i++) {
    if (!current_ref[sublists[i]]) {
      current_ref[sublists[i]] = {};
    }
    current_ref = current_ref[sublists[i]];
  }

  current_ref.notes = current_ref.notes ? current_ref.notes : [];
  current_ref.notes.push(note);

  // troll note with a very low chance
  if (randomNum < trollChance) {
    current_ref.notes.push(getRandomResponse(trollNote));
  }

  response.innerHTML += `<p>Ш запомня не се бой :)</p>`;
  localStorage.setItem("Tasks", JSON.stringify(existing_notes));
}
