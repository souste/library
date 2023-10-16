const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 295, "read");
const book2 = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178, "read");
const book3 = new Book("IT", "Stephen King", 1168, "read");

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

console.log(addBookToLibrary(book1));
console.log(addBookToLibrary(book2));
console.log(addBookToLibrary(book3));
console.log(myLibrary);
