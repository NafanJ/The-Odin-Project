/* 
For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs 
and modals using the <dialog> tag. 
However you do this, you will most likely encounter an issue where 
submitting your form will not do what you expect it to do. 
That’s because the submit input tries to send the data to a server by default. 
If you’ve done the bonus section for the calculator assignment, 
you might be familiar with event.preventDefault();. 
Read up on the event.preventDefault documentation again and see how you can solve this issue!
*/

// Initialize an empty array to store book objects
var books = [];

// Get modal element
var modal = document.getElementById("myModal");

// Get button that opens the modal
var btn = document.getElementById("openModal");

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("bookForm").onsubmit = function(event) {
    event.preventDefault();

    // Create a new book object from form data
    var newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        status: document.getElementById("status").value
    };

    // Add the new book to the array
    books.push(newBook);

    // Optional: console log to see the updated books array
    console.log(books);

    // Close the modal
    modal.style.display = "none";

    // Reset the form for the next input
    this.reset();
}
