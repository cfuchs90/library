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

    bookTitleNode.textContent = book.getTitle();
    bookAuthorNode.textContent = book.getAuthor();
    bookPagesNode.textContent = book.getPages();
    bookReadNode.textContent = book.getReadStatus();

    bookDom.appendChild(bookTitleNode);
    bookDom.appendChild(bookAuthorNode);
    bookDom.appendChild(bookPagesNode);
    bookDom.appendChild(bookReadNode);

    return bookDom;

}

const bookContainer = document.querySelector(".book-container");
let libraryList = [];

bla = new Book("Lord of the Rings", "JRR Tolkien", 422, false);


libraryList.push(bla);
libraryList.push(bla);
libraryList.push(bla);
libraryList.push(bla);
bookContainer.appendChild(makeBookNode(bla));