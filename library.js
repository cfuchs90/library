class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    print_info() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
        console.log(`Read: ${this.read}`);
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPages() {
        return this.pages;
    }

    getReadStatus() {
        return this.read;
    }



    setTitle(newTitle) {
        this.title = newTitle;
    }

    setAuthor(newAuthor) {
        this.author = newAuthor;
    }

    setPages(newPages) {
        this.pages = newPages;
    }

    setReadStatus() {
        if(this.read) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}

let Library = (function() {
    let libraryContents = [];

    addBook = function(title, author, pages, read) {
        let newBookTitle = title;
        let newBookAuthor = author;
        let newBookPages = pages;
        let newBookRead = read;

        let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

        libraryContents.push(newBook); 
    }

    return ({libraryContents, addBook});

})()

let LibraryDom = (function() {
    const bookContainer = document.querySelector(".book-container");
    const addBookMenu = document.querySelector(".add-book-menu");
    const addBookButton = document.querySelector("#add-book");

    function makeBookNode(book) {
        let bookDom = document.createElement("div");
        bookDom.classList.add("book");

        let bookTitleNode = document.createElement("h1");
        let bookAuthorNode = document.createElement("p");
        let bookPagesNode = document.createElement("p");
        let bookReadNode = document.createElement("p");
        let readSpan = document.createElement("span");

        bookTitleNode.textContent =  book.getTitle();
        bookAuthorNode.textContent = "Author: " + book.getAuthor();
        bookPagesNode.textContent = "Pages: " + book.getPages();
        bookReadNode.textContent = "Read: ";

        if(book.getReadStatus()){
            readSpan.innerHTML = "&#10004;";
        } else {
            readSpan.innerHTML = "&#x2717;";
        }

        bookReadNode.appendChild(readSpan);

        bookDom.appendChild(bookTitleNode);
        bookDom.appendChild(bookAuthorNode);
        bookDom.appendChild(bookPagesNode);
        bookDom.appendChild(bookReadNode);

        return bookDom;

    }

    getNewBookInfo = function() {

        const newBookTitle = document.querySelector("#new-book-title").value;
        console.log(newBookTitle);
        const newBookAuthor = document.querySelector("#new-book-author").value;
        const newBookPages = document.querySelector("#new-book-pages").value;
        const newBookRead = document.querySelector("#new-book-read").checked;

        return([newBookTitle, newBookAuthor, newBookPages, newBookRead]);
    }

    clearNewBookMenu = function() {
        const newBookTitle = document.querySelector("#new-book-title").value = "";
        const newBookAuthor = document.querySelector("#new-book-author").value = "";
        const newBookPages = document.querySelector("#new-book-pages").value = "";
        const newBookRead = document.querySelector("#new-book-read").checked = "";
    }

    deleteBookArea = function(bookContainer) {
        while(bookContainer.lastChild) {
            bookContainer.removeChild(bookContainer.lastChild);
        }
    }

    renderBooks = function(library) {
        if(bookContainer.hasChildNodes()) deleteBookArea(bookContainer)

        library.forEach((item) => {
            bookContainer.appendChild(makeBookNode(item));
        });
    }

    //addBookButton.addEventListener("click", (e) => {
    toggleMenuVisibility = function() {
        if(addBookMenu.style.visibility == "visible") {
            addBookMenu.style.visibility = "hidden";
            addBookButton.textContent = "Add Book";
        } else {
            addBookMenu.style.visibility = "visible";
            addBookButton.textContent = "Schließen";
        }
    }

    toggleMenu = function() {
        addBookButton.addEventListener("click", toggleMenuVisibility)
    }

    return({renderBooks, toggleMenu, getNewBookInfo, clearNewBookMenu});
})()



const addBookSubmit= document.querySelector("#new-book-submit");


Library.addBook("Lord of the Rings", "JRR Tolkien", 422, false);
Library.addBook("Lord of the Rings", "JRR Tolkien", 422, true);
Library.addBook("Lord of the Rings", "JRR Tolkien", 422, false);


addBookSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    Library.addBook(...LibraryDom.getNewBookInfo());
    LibraryDom.clearNewBookMenu();
    LibraryDom.renderBooks(Library.libraryContents)
    // renderBooks(libraryList, bookContainer);
});

LibraryDom.toggleMenu();
LibraryDom.renderBooks(Library.libraryContents);

