const tableBody = document.querySelector("#books_table tbody");
const newBookBtn = document.getElementById("new_book_btn");
const newBookDialog = document.getElementById("new_book_popup");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "readed" : "not readed yet";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "readed" : "not read yet"
    }.`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);

function showBooksOnTable() {
  let tableRows = "";
  /** @param myLibrary[index] for each book */
  myLibrary.forEach((book) => {
    tableRows += `
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
    </tr>`;
    tableBody.innerHTML = tableRows;
  });
}

newBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

showBooksOnTable();
