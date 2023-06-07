let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return title + ", " + author + ", " + pages + ", " + read;
    // }
}

// const book1 = new Book('1984', 'George Orwell', '328 pages', 'read');
// const book2 = new Book('Lessons in chemistry', 'Bonnie Garmus', '392 pages', 'read');


// book1.info();
// book2.info();

// console.log(book1.info());
// console.log(book2.info());

// Book.prototype.toggleRead = function() {
//     this.read = !this.read;
// }


function displayLibrary() {
    let libraryBook = document.querySelector("#library");
    let eachBook = document.createElement("div");
    eachBook.classList.add("book-cards");
    eachBook.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        eachBook.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`; // ${book.read ? "Read" : "Not read yet"}`;
        
        let readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.textContent = book.read ? "Read" : "Not read";
        readBtn.addEventListener("click", function(){
            book.read = !book.read;
            readBtn.textContent = book.read ? "Read" : "Not read";
        });
        eachBook.appendChild(readBtn);
        
        let removeBook = document.createElement("button");
        removeBook.classList.add("remove-btn");
        removeBook.textContent = "Remove";
        removeBook.addEventListener("click", function() {
            eachBook.remove();
        })
        eachBook.appendChild(removeBook);
        libraryBook.appendChild(eachBook);
        
    }
}

// function removeBook(index) {
//     myLibrary.splice(index, 1);
//     displayLibrary();

// }


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}

let newBookbtn = document.querySelector("#new-book");
newBookbtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.reset();
    
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})