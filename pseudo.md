OOP Plan:   *test for github tokens

CLASSES
• Note: for making new notes
    • Modal (sub-class of Note): for making modal from a particular note

OBJECTS
• InputBoxObj: upon User clicking 'Add Note', this gets and sends User-input str, & current datetime str, to new Note obj
• BoardObj: holds all notes in an array (boardArr), & adds all notes in boardArr to DOM for those notes to be displayed

1. User clicks 'Add Note' or Enter key

2. Validate note string
    - if empty string: input box dialogue 'Please write a note'
    - IF note string VALID: continue;

3. Add note:
    //DONE - create newNote obj from Note class
    - append newNote to BoardObj.boardArr array
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
    - remove deleted note from DOM

6. View note in modal:  (Modal will need HTML & CSS also)
    - eventListener for 'View Detail' btn click
    - new Modal obj created from parent Note    
    - close Modal: 'x' btn OR click outside Modal




TO-DO:

// Essential:
• Make note from textbox input + datetime
• Append note to boardArr
• Display boardArr
• Create modal template in index.html
• Display modal with parent note's prop's on 'view detail' btn click - (will sub-classing work?)
• Delete note from boardArr on 'Delete' button click
• 

// Extra / functional:
• Add validation of input str 
• Allow input via Enter key 

// Cosmetic:
• Improve dimensions of input textbox
• Fix 'Note:' text next to input textbox squeezing in behind textbox when narrowing the page
• 