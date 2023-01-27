function takeNotes(userInput) {
  //troll
  const trollChance = 0.2;
  let randomNum = Math.random();

  //input
  const inputArray = userInput.split("-");
  const list = inputArray[0].slice(16).trim();
  if (inputArray[1]){
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
    if(current_ref.notes.indexOf(note) === -1) {
      current_ref.notes.push(note);

      // troll note with a very low chance
      if (randomNum < trollChance) {
        current_ref.notes.push(getRandomResponse(trollNote));
      }

      response.innerHTML += `<p>Ш запомня не се бой :)</p>`;
      localStorage.setItem("Tasks", JSON.stringify(existing_notes));
    } else {
      response.innerHTML += `<p>Вече имаш такава бележка в тази категория..</p>`;
    }
  }
  else {
    response.innerHTML += `<p>То хубаво ама ама каква да е бележката..</p>`;
  }
}
