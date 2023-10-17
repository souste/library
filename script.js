const container = document.querySelector(".container");

const newBookButton = document.querySelector(".new-book-button");
const cancelButton = document.querySelector(".cancel-book-button");
const addButton = document.querySelector(".add-book-button");

const bookForm = document.querySelector(".book-form");
const formTitle = document.querySelector("#form-title");
const formAuthor = document.querySelector("#form-author");
const formPages = document.querySelector("#form-pages");
const formHaveRead = document.querySelector("#form-have-read");

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
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("p");
  title.innerText = books.title;
  author.innerText = `Author: ${books.author}`;
  pages.innerText = `${books.pages} pages`;
  haveRead.innerText = books.read;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  const changeReadButton = document.createElement("button");
  changeReadButton.innerText = "Read?";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(haveRead);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(changeReadButton);
  container.appendChild(bookCard);

  deleteButton.addEventListener("click", () => {
    // this works visually but I think I'm just hiding the card as opposed to deleting it
    title.innerText = "";
    author.innerText = "";
    pages.innerText = "";
    haveRead.innerText = "";
    bookCard.style.display = "none";
    console.log(myLibrary);
  });

  let active = false;

  changeReadButton.addEventListener("click", () => {
    active = !active;
    if (active) {
      haveRead.innerText = "notRead";
    } else {
      haveRead.innerText = "Read!!";
    }
  });
});

newBookButton.addEventListener("click", () => {
  bookForm.style.display = "block";
});

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookx = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    formHaveRead.value
  );
  addBookToLibrary(bookx);
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("p");
  (title.innerText = formTitle.value),
    (author.innerText = `Author: ${formAuthor.value}`);
  pages.innerText = `${formPages.value} pages`;
  haveRead.innerText = formHaveRead.value;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  const changeReadButton = document.createElement("button");
  changeReadButton.innerText = "Read?";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(haveRead);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(changeReadButton);
  container.appendChild(bookCard);

  bookForm.style.display = "none";

  deleteButton.addEventListener("click", () => {
    // this works visually but I think I'm just hiding the card as opposed to deleting it
    title.innerText = "";
    author.innerText = "";
    pages.innerText = "";
    haveRead.innerText = "";
    bookCard.style.display = "none";
    console.log(myLibrary);
  });

  let active = false;

  changeReadButton.addEventListener("click", () => {
    active = !active;
    if (active) {
      haveRead.innerText = "notRead";
    } else {
      haveRead.innerText = "Read!!";
    }
  });
});

//Think this is still functioning as a submit button
cancelButton.addEventListener("click", () => {
  bookForm.style.display = "none";
});
