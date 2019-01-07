var section = document.querySelector('section');

var requestURL = 'https://www.googleapis.com/books/v1/volumes?q=tech';
var request = new XMLHttpRequest()
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var bookCatalog = request.response;
  showBooks(bookCatalog);
}

function showBooks(jsonObj) {
  var books = jsonObj['items'];

  for (var i = 0; i < books.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');

    myH2.textContent = books[i].title;

    var showAuthors = books[i].authors;
    for (var j = 0; j < showAuthors.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = showAuthors[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);

    section.appendChild(myArticle);
  }
}
