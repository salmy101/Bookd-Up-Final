import axios from 'axios';

// Takes in an array of isbns and returns a promise for book name, author, and thumbnail
export function getBooksByISBN(bookISBNs) {
  const searchQuery = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
  const resultFields = '&fields=items(volumeInfo/title,volumeInfo(authors),volumeInfo/imageLinks/thumbnail,volumeInfo/industryIdentifiers)';
  const promises = [];

  for (const isbn of bookISBNs) {
    promises.push(axios.get(searchQuery + isbn + resultFields));
  }

  return Promise.all(promises);
}

export function cleanUpShelf(shelf) {
  const books = [];
  for (const book of shelf) {
    if (Object.keys(book.data).length !== 0) {
      books.push(book.data.items[0].volumeInfo);
    }
  }
  return books;
}

export function getBooksBySearch(search, page) {
  const searchQuery = 'https://www.googleapis.com/books/v1/volumes?q=';
  const startIndex = `&startIndex=${(page - 1) * 3}`
  const resultFields = '&fields=items(volumeInfo/title,volumeInfo(authors),volumeInfo/imageLinks/thumbnail,volumeInfo/publishedDate,volumeInfo/industryIdentifiers)';
  console.log(searchQuery + search + startIndex + '&maxResults=3' + resultFields);

  return axios.get(searchQuery + search + startIndex + '&maxResults=3' + resultFields);
}

export function cleanUpSearchResults(result) {
  return result.map(item => item.volumeInfo);
}