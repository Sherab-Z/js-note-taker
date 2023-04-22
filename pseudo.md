OOP Plan:

CLASSES
• Note: template for making new notes
• Modal (sub-class of Note): template for making a modal from a particular note

OBJECTS
• inputBoxObj: upon User clicking 'Add Note', this gets and sends User-input (text str), & current datetime str, to new Note obj
• boardObj: holds all notes in an array (notesArr), & adds all notes in notesArr to DOM for those notes to be displayed on boardObj.boardEl

1. User clicks 'Add Note' or Enter key

2. Validate note string
    - if empty string: input box dialogue 'Please write a note'
    - IF note string VALID: continue;

3. Add note:
    //DONE - create newNote obj from Note class
    - append newNote to BoardObj.notesArr array
    - append nodes to HTML DOM, using similar method as below:

            /* create + append Delete Button to each new list item */
            function addDeleteButton(li) {
                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = "x";
                deleteButton.setAttribute("onclick", "deleteItem(this)");
                li.appendChild(deleteButton);
            } 

4. Display All Notes; clear Textfield

5. Delete a note: eventListener via 'this'
    - eventListener for 'Delete' btn click
    - remove note from boardObj.notesArr array
    - refresh DOM display

6. View note in modal:  (Modal will need HTML & CSS also)
    - eventListener for 'View Detail' btn click
    - new Modal obj created from parent Note    
    - close Modal: 'x' btn OR click outside Modal




TO-DO:

//  Essential:
• [x] append newNote to notesArr
• [] display notesArr el's in boardEl UI div
• [] make Modal's work
• [] ensure Delete btn works
• [] Create col containers with CSS Grid
• [] Manage notes dynamic layout with CSS Flexbox
• [] Add validation of input str 

//  Nice to have:
• [] Allow input via Enter key 

//  Cosmetic:
• [] Improve dimensions of input textbox
• [] Fix 'Note:' text next to input textbox squeezing in behind textbox when narrowing the page
• 