// call displayNotes(); 

const InputBoxObj = {

    textboxEl:      document.getElementById( "textbox" ),

    btnEl:          document.getElementById( "add-btn" ),

    getDatetime:    function() {

                        let now = new Date();
                        let datetime = `${ now.getDate() }-${ now.getMonth()+1 }-${ now.getFullYear() }` + ' ' +
                                        '|' + ' ' + `${ now.getHours() }:${ now.getMinutes() }`;
                        return datetime;
                    },

    makeNote:       function() {
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
    detailBtn =    document.getElementById( "open-modal-btn-div" );

    deleteBtn =    document.getElementById( "delete-btn-div" );

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



    closeBtnBlock =     document.getElementById( "modal-block" );

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

    addToBoard:     function(/* ??? */) {

                        
                    },

    showNotes:      function(/* ??? */) {

                        
                    }
}

InputBoxObj.btnEl.addEventListener( 'click', function() {
    console.log("noteStr: " + InputBoxObj.textboxEl.value);
    InputBoxObj.makeNote();
} );