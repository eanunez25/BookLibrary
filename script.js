const myLibrary = []

function Book() {

}

function addBookToLibrary() {
  let form = document.getElementById("form")
  let bookTitle = document.getElementById("book-title").value
  let author = document.getElementById("author").value
  let read = document.getElementById("read").value
  let book = {title:bookTitle, author: author, read:read}
  myLibrary.push(book)
  console.log(myLibrary)
  form.reset()
}

const submit = document.getElementById("submit")
submit.addEventListener("click", addBookToLibrary)

