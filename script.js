const container = document.querySelector(".container");
const card = document.createElement("div");
card.classList.add("book-card");
container.appendChild(card);

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

myLibrary.forEach((books) => {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("p");
  title.innerText = books.title;
  author.innerText = books.author;
  pages.innerText = books.pages;
  haveRead.innerText = books.read;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(haveRead);
  container.appendChild(bookCard);
});
