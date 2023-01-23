function returnNotes() {
  const notes = JSON.parse(localStorage.getItem("Tasks")) || {};

  if (Object.keys(notes).length) {
    let notesList = "";

    function displayNotes(botNotes, level) {
      for (let note in botNotes) {
        if (note === "notes") {
          notesList += `</br>${level}: `;
          for (var i = 0; i < botNotes[note].length; i++) {
            notesList += `"${botNotes[note][i]}" `;
          }
        } else {
          displayNotes(botNotes[note], level + " > " + note);
        }
      }
    }

    displayNotes(notes, "");
    response.innerHTML += "<p>Ето ти бележките бе!</br>" + notesList + "</p>";
  } else {
    response.innerHTML += "<p>Абе, нищо не си ми казвал да помня!</p>";
  }
}
