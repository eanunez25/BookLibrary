const myLibrary = []
let table = document.getElementById("table")

function Book() {

}

function addBookToLibrary() {
  let form = document.getElementById("form")
  let bookTitle = document.getElementById("book-title").value
  let author = document.getElementById("author").value
  let read = document.getElementById("read").value

  if (bookTitle == "") {
    alert("Missing Input")
    return
  } else if (author == "") {
    alert("Missing Input")
    return
  } else {
    let book = {title:bookTitle, author: author, read:read}
    myLibrary.push(book)
    form.reset()
  }

  displayBooks()
}

function displayBooks() {
  let book = myLibrary[myLibrary.length - 1]


  let body = document.getElementById("body")

  let row = document.createElement("tr")
  let titleRow = document.createElement("td")
  let authorRow = document.createElement("td")
  let statusRow = document.createElement("td")
  let deleteRow = document.createElement("td")

  titleRow.innerHTML = book.title
  authorRow.innerHTML = book.author
  statusRow.innerHTML = `<button class="btn btn-info">${book.read}</button>`
  deleteRow.innerHTML = '<button class="btn btn-danger">Delete</button>'

  row.appendChild(titleRow)
  row.appendChild(authorRow)
  row.appendChild(statusRow)
  row.appendChild(deleteRow)

  body.appendChild(row)
  table.appendChild(body)

  deleteBook = document.getElementsByClassName('btn-danger')
}

const submit = document.getElementById("submit")
submit.addEventListener("click", addBookToLibrary)

table.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    const row = e.target.closest("tr"); // Find the closest table row (tr)
    if (row) {
      row.remove(); // Remove the row from the table
    }
  }
})

table.addEventListener("click", function (e) {
  if(e.target.innerHTML === "Not Read") {
    e.target.innerHTML = "Read"
  } else {
    e.target.innerHTML = "Not Read"
  }
})
