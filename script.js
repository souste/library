const container = document.querySelector(".container");

const myLibrary = [
  { title: "The Hobbit", author: "J.R.R Tolkien", pages: 295, read: "read" },
  {
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 1178,
    read: "read",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const book1 = new Book("IT", "Stephen King", 1168, "read");
const book2 = new Book("The One Thing", "Gary Keller", 240, "read");

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

let title;
let author;
let pages;
let read;

function displayList(library) {
  return library.forEach((book) => {
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRead = document.createElement("div");
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    bookPages.innerText = book.pages;
    bookRead.innerText = book.read;
    container.appendChild(bookTitle);
    container.appendChild(bookAuthor);
    container.appendChild(bookPages);
    container.appendChild(bookRead);
  });
}

displayList(myLibrary);
