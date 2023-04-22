// call displayNotes();

const inputBoxObj = {
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

class Note {

  deleteBtnBlock =
    `<div id="add-btn-div">` +
    `<button id="add-btn" type="submit" class="btn btn-success btn-lg">` +
    `x` +
    `</button>` +
    `</div>`;

  modalBtnBlock =
    `<div id="modal-btn-div">` +
    `<button id="add-btn" type="submit" class="btn btn-success btn-lg">` +
    `Expand` +
    `</button>` +
    `</div>`;

  constructor(noteStr, datetime) {
    this.noteStr = noteStr;
    this.datetime = datetime;
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
    // when a note's 'delete' button is clicked, remove that note from boardObj.notesArr
  }
}

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

const boardObj = {
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

function inputHandler() {
  console.log("noteStr: " + inputBoxObj.textboxEl.value);
  inputBoxObj.makeNoteAndAddToBoard();
}

inputBoxObj.btnEl.addEventListener("click", inputHandler);

const inputEl = document.getElementById("textbox");
console.log("inputEl: " + inputEl);
inputEl.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        console.log("Return key pressed");
      event.preventDefault();
      inputHandler();
    }
  });
