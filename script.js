// call displayNotes();

// *** INPUT BOX OBJECT *** //

const InputBoxObj = {
  textboxEl: document.getElementById("textbox"),

  btnEl: document.getElementById("add-btn"),

  getDatetime: function () {
    let now = new Date();
    let datetime =
      `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}` +
      ", " +
      `${now.getHours()}:${now.getMinutes()}`;
    return datetime;
  },

  makeNoteAndAddToBoard: function () {
    // ensure string does not contain code - if all ok, then: new Note(text, date) [USE event.target to access the button, if it's useful]
    let noteStr = this.textboxEl.value;
    let datetime = this.getDatetime();
    let newNote = new Note(noteStr, datetime);
    console.log("New note: " + JSON.stringify(newNote)); // TESTING

    newNote.addToNotesArr();

    console.log("boardObj.notesArr: " + boardObj.notesArr[0]); // TESTING

    boardObj.displayNotesOnUI();
  },
};

// *** NOTE MANAGER CLASS *** //

class NoteManager {
  //  *** Constructor
  constructor() {
    this.notes = [];
    this.boardEl = document.getElementById("note-board");
  }

  //  *** Methods
  addNote() {
    const noteEl = this.createNoteEl();
    this.notes.push(noteEl);
    this.boardEl.appendChild(noteEl);
  }

  deleteNote(noteEl) {
    const index = this.notes.indexOf(noteEl);
    if (index > -1) {
      this.notes.splice(index, 1);
      this.boardEl.removeChild(noteEl);
    }
  }

  createNoteEl() {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note-cont");
    noteEl.innerHTML = 
    '<div class="delete-btn-div">' +
    '<button type="submit" class="delete btn btn-success btn-lg">' +
    `x` +
    `</button>` +
    '</div><div class="note-text">' +
    this.getNoteText() +
    '</div><div class="note-datetime">' +
    this.getNoteDatetime() +
    "</div>";

  const deleteBtnEl = noteEl.querySelector(".delete .btn");
  deleteBtnEl.addEventListener("click", () => {
    this.deleteNote.bind(this,noteEl)();
  });

  return noteEl;
  }

  get
}

// *** NOTE CLASS *** //

class Note {
  constructor(noteStr, datetime) {
    this.noteStr = noteStr;
    this.datetime = datetime;

    this.deleteBtnBlock =
      `<div id="delete-btn-div">` +
      `<button data-index="${
        boardObj.notesArr.length - 1
      }" class="delete-btn" type="submit" class="btn btn-success btn-lg">` +
      `x` +
      `</button>` +
      `</div>`;

    this.modalBtnBlock =
      `<div id="modal-btn-div">` +
      `<button id="add-btn" type="submit" class="btn btn-success btn-lg">` +
      `Expand` +
      `</button>` +
      `</div>`;

    this.noteEl = this.createNoteEl();

    // Select the delete button element and add an event listener to it
    this.deleteBtnEl = this.noteEl.querySelector(".delete-btn");
    this.deleteBtnEl.addEventListener("click", () => {
      this.deleteNote();
    });
  }

  createNoteEl() {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note-cont");
    noteEl.innerHTML =
      this.deleteBtnBlock +
      '<div class="note-text">' +
      this.noteStr +
      '</div><div class="note-datetime">' +
      this.datetime +
      "</div>" +
      this.modalBtnBlock;
    return noteEl;
  }

  addToNotesArr() {
    boardObj.notesArr.push(this);
  }

  createModal() {
    new Modal();
    // when a note on the board is clicked - create new obj from Modal class, passing it 'this' note's text & date values
  }

  deleteNote() {
    console.log("deleteNote called");
    // Find the index of this note in the notesArr array
    const index = boardObj.notesArr.indexOf(this);

    // If the note is found in the notesArr array, remove it
    if (index !== -1) {
      boardObj.notesArr.splice(index, 1);
      boardObj.boardEl.removeChild(this);
    }

    // Update the UI to reflect the new state of the notesArr array
    boardObj.displayNotesOnUI();
  }
}

// *** MODAL CLASS (EXT OF NOTE CLASS) *** //

class Modal extends Note {
  closeBtnBlock =
    '<div class="modal">' +
    '<div class="modal-content">' +
    '<span class="close-btn">&times;</span>' +
    "<p>this is the text inside the modal</p>" +
    "</div>" +
    "</div>";

  constructor(noteStr, datetime) {
    super(noteStr, datetime);
  }

  openModal() {
    // upon clicking a note's 'view detail' btn -
  }

  closeModal() {
    // closes the currently open modal
  }
}

const BoardObj = {
  boardEl: document.getElementById("note-board"),

  notesArr: [],

  displayNotesOnUI: function () {
    this.boardEl.innerHTML = "";
    this.notesArr.forEach((note) => {
      const noteEl = note.createNoteEl();
      this.boardEl.appendChild(noteEl);
    });
  },
};


// *** EVENT LISTENERS & HANDLERS *** //

function inputHandler() {
  console.log("noteStr: " + inputBoxObj.textboxEl.value);
  inputBoxObj.makeNoteAndAddToBoard();
}

inputBoxObj.btnEl.addEventListener("click", inputHandler);

const inputEl = document.getElementById("textbox");
console.log("inputEl: " + inputEl);
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Return key pressed");
    event.preventDefault();
    inputHandler();
  }
});


// ----------------------------------------------------------------

