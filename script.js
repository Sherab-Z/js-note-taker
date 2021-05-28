// call displayNotes(); 

const InputBoxObj = {

    textboxEl:      document.getElementById( "textbox" ),

    btnEl:          document.getElementById( "add-btn" ),

    getDatetime:        function() {

        let now = new Date();
        let datetime = `${ now.getDate() }-${ now.getMonth()+1 }-${ now.getFullYear() }` + ' ' +
                        '|' + ' ' + `${ now.getHours() }:${ now.getMinutes() }`;
        return datetime;
        },

    makeNote:   function() {
        // ensure string does not contain code - if all ok, then: new Note(text, date) [USE event.target to access the button, if it's useful]
                    let noteStr = this.textboxEl.value;
                    let datetime = this.getDatetime();
                    let newNote = new Note( noteStr , datetime );
                    console.log( 'New note: ' + JSON.stringify(newNote) ); // TESTING

                    BoardObj.boardArr.push(newNote);
                    console.log( 'BoardObj.boardArr: ' + JSON.stringify(BoardObj.boardArr) ); // TESTING
                    },
}


class Note {
    detailBtnBlock =    '<div id="detail-btn-div">' +
                            '<button id="add-btn" type="submit" class="btn btn-success btn-lg">' +
                            'Add Note' +
                            '</button>' +
                        '</div>';

    deleteBtnBlock =    '<div id="add-btn-div">' +
                            '<button id="add-btn" type="submit" class="btn btn-success btn-lg">' +
                            'Add Note' +
                            '</button>' +
                        '</div>';

    constructor( noteStr, datetime ) {

        this.noteStr = noteStr;
        this.datetime = datetime;
    }


    addToBoard() {

    }

    createModal() {

        new Modal();
        // when a note on the board is clicked - create new obj from Modal class, passing it 'this' note's text & date values
    }

    deleteNote() {
        // when a note's 'x' button is clicked - remove that note from memory
    }

}


class Modal extends Note {



    closeBtnBlock =     '<div class="modal">' +
                            '<div class="modal-content">' +
                                '<span class="close-btn">&times;</span>' +
                                '<p>this is the text inside the modal</p>' +
                            '</div>' +
                        '</div>';

    constructor( noteStr, datetime ) {
        super( noteStr, datetime );
    }
    
    openModal() {
        // upon clicking a note's 'view detail' btn - 
    }

    closeModal() {
        // closes the currently open modal
    }
}


const BoardObj = {
    
    boardEl:        document.getElementById( "note-board" ),

    boardArr:       [],

    addToBoard:          function(/* ??? */) {

                        
                    },

    showNotes:        function(/* ??? */) {

                        
                    }
}

InputBoxObj.btnEl.addEventListener( 'click', function() {
    console.log("noteStr: " + InputBoxObj.textboxEl.value);
    InputBoxObj.makeNote();
} );




/*

// eventlistener for addBtn: validate note str, grab prior notes as JSON into allNotes object, grab new note as JSON into object, push new note onto allNotes object

addBtn.addEventListener(click, function (){

    let allNotesObj;
    let noteInputBox = document.getElementById("textbox");
    let priorNotes = document.getElementById("notes-area");

    // if prior notes exist: parse them into an object
    if (noteInputBox.value == '') {
        allNotesObj = [];
    } else {
        allNotesObj = JSON.parse(priorNotes);
    }

    // add date
    let now = new Date();
    let datetime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}' ' 
                    | ' ' ${now.getHours()}:${now.getMinutes()}`;
    
    // put into local storage
    let newNoteObj = {note: noteInputBox.value, date: datetime.value};


});

/
*/
