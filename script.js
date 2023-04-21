// call displayNotes(); 

const inputBoxObj = {

    textboxEl:      document.getElementById( "textbox" ),

    btnEl:          document.getElementById( "add-btn" ),

    getDatetime:        function() {

        let now = new Date();
        let datetime = `${ now.getDate() }-${ now.getMonth()+1 }-${ now.getFullYear() }` +
                        ', ' + `${ now.getHours() }:${ now.getMinutes() }`;
        return datetime;
        },

    makeNote:   function() {
        // ensure string does not contain code - if all ok, then: new Note(text, date) [USE event.target to access the button, if it's useful]
                    let noteStr = this.textboxEl.value;
                    let datetime = this.getDatetime();
                    let newNote = new Note( noteStr , datetime );
                    console.log( 'New note: ' + JSON.stringify(newNote) ); // TESTING

                    boardObj.notesArr.push(newNote); 

                    console.log( 'boardObj.boardArr: ' + JSON.stringify(boardObj.boardArr) ); // TESTING
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
        // when a note's 'delete' button is clicked, remove that note from boardObj.notesArr
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


const boardObj = {
    
    boardEl:        document.getElementById( "note-board" ),

    notesArr:       [],

    addToBoard:          function(/* ??? */) {

                        
                    },

    showNotes:        function(/* ??? */) {

                        
                    }
}

inputBoxObj.btnEl.addEventListener( 'click', function() {
    console.log("noteStr: " + inputBoxObj.textboxEl.value);
    inputBoxObj.makeNote();
} );
