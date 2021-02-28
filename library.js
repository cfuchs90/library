class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
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

function makeBookNode(book) {
    let bookDom = document.createElement("div");
    bookDom.classList.add("book");

    let bookTitleNode = document.createElement("h1");
    let bookAuthorNode = document.createElement("p");
    let bookPagesNode = document.createElement("p");
    let bookReadNode = document.createElement("p");
    let readSpan = document.createElement("span");

    bookTitleNode.textContent = "Title: " + book.getTitle();
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

const bookContainer = document.querySelector(".book-container");
const addBookMenu = document.querySelector(".add-book-menu");
const addBookButton = document.querySelector("#add-book");
let libraryList = [];

bla = new Book("Lord of the Rings", "JRR Tolkien", 422, false);
bla2 = new Book("Lord of the Rings", "JRR Tolkien", 422, false);
bla3 = new Book("Lord of the Rings", "JRR Tolkien", 422, false);

bla2.setReadStatus();

libraryList.push(bla);
libraryList.push(bla2);
libraryList.push(bla3);


libraryList.forEach((item) => {
    bookContainer.appendChild(makeBookNode(item));
});

addBookButton.addEventListener("click", (e) => {
    addBookMenu.style.visibility = "visible";
});