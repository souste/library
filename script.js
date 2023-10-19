const bookForm = document.querySelector(".book-form");
const formTitle = document.querySelector("#form-title");
const formAuthor = document.querySelector("#form-author");
const formPages = document.querySelector("#form-pages");
const formHaveRead = document.querySelector("#form-have-read");

const newBookButton = document.querySelector(".new-book-button");
const addButton = document.querySelector(".add-book-button");
const deleteButton = document.querySelector(".delete-button");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 295, "read");
const book2 = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178, "read");
const book3 = new Book("IT", "Stephen King", 1168, "read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
console.log(myLibrary);

const bookTable = document.getElementById("book-table");
const bookTableHeader = bookTable.querySelector("thead");
const bookTableBody = bookTable.querySelector("tbody");

function displayBooks() {
  bookTableHeader.innerHTML = "";
  let tr = document.createElement("tr");
  const headersData = Object.keys(myLibrary[0]);
  headersData.forEach((key) => {
    let th = document.createElement("th");
    th.innerHTML = key;
    tr.appendChild(th);
  });
  bookTableHeader.appendChild(tr);
  bookTableBody.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement("tr");
    headersData.forEach((key) => {
      let td = document.createElement("td");
      td.innerHTML = myLibrary[i][key];

      tr.appendChild(td);
    });

    let tdButton = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";

    deleteButton.addEventListener("click", () => {
      myLibrary.pop();
      console.log(myLibrary);
      displayBooks();
    });
    tdButton.appendChild(deleteButton);
    tr.appendChild(tdButton);
    bookTableBody.appendChild(tr);
  }
}

displayBooks();

newBookButton.addEventListener("click", () => {
  bookForm.style.display = "block";
});

// deleteButton.addEventListener("click", () => {
//   myLibrary.pop();
//   console.log(myLibrary);
//   displayBooks();
// });

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookx = new Book(formTitle.value, formAuthor.value, formPages.value, formHaveRead.value);
  addBookToLibrary(bookx);
  displayBooks();
});
