const bookForm = document.querySelector(".book-form");
const formTitle = document.querySelector("#form-title");
const formAuthor = document.querySelector("#form-author");
const formPages = document.querySelector("#form-pages");
const formHaveRead = document.querySelector("#form-have-read");

const newBookButton = document.querySelector(".new-book-button");
const addButton = document.querySelector(".add-book-button");

const bookTable = document.getElementById("book-table");
const bookTableHeader = bookTable.querySelector("thead");
const bookTableBody = bookTable.querySelector("tbody");

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

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 295, "Yes");
const book2 = new Book("The Lord of the Rings", "J.R.R Tolkien", 1178, "Yes");
const book3 = new Book("IT", "Stephen King", 1168, "Yes");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayBooks() {
  bookTableBody.innerHTML = "";

  if (myLibrary.length > 0) {
    let tr = document.createElement("tr");
    const headersData = Object.keys(myLibrary[0]);

    for (let i = 0; i < myLibrary.length; i++) {
      let tr = document.createElement("tr");

      // CREATE TABLE ROWS
      headersData.forEach((key) => {
        let td = document.createElement("td");
        td.innerHTML = myLibrary[i][key];

        tr.appendChild(td);
      });
      // DELETE BUTTON WITHIN TABLE ROW
      const tdButton = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "DELETE";
      deleteButton.addEventListener("click", () => deleteRow(i));

      // HAVE READ BUTTON WITHIN TABLE ROW
      const tdButton2 = document.createElement("td");
      const readButton = document.createElement("button");
      readButton.innerText = "READ?";
      readButton.addEventListener("click", () => readRow(i));

      tdButton.appendChild(deleteButton);
      tr.appendChild(tdButton);

      tdButton2.appendChild(readButton);
      tr.appendChild(tdButton2);

      bookTableBody.appendChild(tr);
    }
  }
}

displayBooks();

newBookButton.addEventListener("click", () => {
  bookForm.style.display = "block";
});

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookx = new Book(formTitle.value, formAuthor.value, formPages.value, document.querySelector(`input[name="reads"]:checked`).value);
  addBookToLibrary(bookx);
  displayBooks();
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  bookForm.style.display = "none";
});

function deleteRow(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function readRow(index) {
  if (myLibrary[index]["read"] === "No") {
    myLibrary[index]["read"] = "Yes";
  } else {
    myLibrary[index]["read"] = "No";
  }
  displayBooks();
}
