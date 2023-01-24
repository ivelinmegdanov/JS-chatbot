function removeNotes(userInput) {
  const inputArray = userInput.split("-");
  let list = inputArray[0].slice(11).trim();
  let note = inputArray[1].trim();

  const existing_notes = JSON.parse(localStorage.getItem("Tasks")) || {};

  const sublists = list.split(" ");
  let current_ref = existing_notes;

  for (let i = 0; i < sublists.length; i++) {
    if (!current_ref[sublists[i]]) {
      response.innerHTML += "<p>Абе не намирам тая категория</p>";
      return;
    }
    current_ref = current_ref[sublists[i]];
  }

  if (!current_ref.notes) {
    response.innerHTML += "<p>Ти мръдна ли? Няма такава бележка в тая категория..</p>";
    return;
  }

  let index = current_ref.notes.indexOf(note);
  
  if (index !== -1) {
    current_ref.notes.splice(index, 1);
    if(current_ref.notes.length === 0){
      delete current_ref.notes;
    }
    localStorage.setItem("Tasks", JSON.stringify(existing_notes));
    response.innerHTML += `<p>Да шефе! Премахвам: "${note}" от ${list}</p>`;
  } else {
    response.innerHTML += "<p>Ти мръдна ли? Няма такава бележка в тая категория..</p>";
  }
}