const myLibrary = []

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
    // console.log(myLibrary)
    form.reset()
  }

  displayBooks()
}

function displayBooks() {
  let book = myLibrary[myLibrary.length - 1]

  let table = document.getElementById("table")
  let body = document.getElementById("body")

  let row = document.createElement("tr")
  let titleRow = document.createElement("td")
  let authorRow = document.createElement("td")
  let statusRow = document.createElement("td")
  let deleteRow = document.createElement("td")

  titleRow.innerHTML = book.title
  authorRow.innerHTML = book.author
  statusRow.innerHTML = book.read

  row.appendChild(titleRow)
  row.appendChild(authorRow)
  row.appendChild(statusRow)

  body.appendChild(row)
  table.appendChild(body)
}

const submit = document.getElementById("submit")
submit.addEventListener("click", addBookToLibrary)

