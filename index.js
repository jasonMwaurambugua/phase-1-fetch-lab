//Fetch Lab
//Jason

function fetchBooks("https://bookboon.com/zh/textbooks") {

  // return fetch
  return fetch ("https://bookboon.com/zh/textbooks")
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
