const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const bookRead = document.querySelector(".book-read");

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
  return (jeevy = library.forEach((book) => {
    console.log(book.title);
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    bookPages.innerText = book.pages;
    bookRead.innerText = book.read;

    // bookDisplay.innerText = book.title;
    // bookDisplay.innerText = book.author;
  }));
}

displayList(myLibrary);
