// Function to add a new note
function addNote() {
    // Get the note input element
    const noteInput = document.getElementById('noteInput');
    // Retrieve existing notes from localStorage or initialize an empty array
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Get the new note from the input field
    const newNote = noteInput.value;
    // Add the new note to the notes array
    notes.push(newNote);
    // Update the notes in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    // Clear the input field
    noteInput.value = '';
    // Display the updated list of notes
    displayNotes();
}

// Function to delete a note by index
function deleteNote(index) {
    // Retrieve existing notes from localStorage or initialize an empty array
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Remove the note at the specified index
    notes.splice(index, 1);
    // Update the notes in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    // Display the updated list of notes
    displayNotes();
}

// Function to display notes in the UI
function displayNotes() {
    // Get the HTML element where the list of notes will be displayed
    const noteList = document.getElementById('noteList');
    // Retrieve existing notes from localStorage or initialize an empty array
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Clear the content of the HTML element
    noteList.innerHTML = '';

    // Iterate through the notes array
    for (let i = 0; i < notes.length; i++) {
        // Get each note
        const note = notes[i];
        // Create a list item for each note
        const listItem = document.createElement('li');
        listItem.textContent = note;

        // Create a "Delete" button for each note
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete'; // Add the 'delete' class

        // Add an event listener to the "Delete" button that calls deleteNote with the current index
        deleteButton.onclick = function () {
            deleteNote(i);
        };

        // Append the "Delete" button to the list item
        listItem.appendChild(deleteButton);
        // Append the list item to the HTML element
        noteList.appendChild(listItem);
    }
}

// Run the displayNotes function when the window is fully loaded
window.onload = function () {
    displayNotes();
};
