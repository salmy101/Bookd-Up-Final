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

// Returns 12 books based on search parameters
export function getBooksBySearch(search, page, filter) {
  const searchQuery = 'https://www.googleapis.com/books/v1/volumes?q=';
  const startIndex = `&startIndex=${(page - 1) * 12}`;
  const resultFields = '&fields=items(selfLink,volumeInfo/title,volumeInfo(authors),volumeInfo/imageLinks/thumbnail,volumeInfo/publishedDate)';

  return axios.get(searchQuery + filter + search + startIndex + '&maxResults=12' + resultFields);
}

// Makes it easier to access search results
export function cleanUpSearchResults(result) {
  return result.map(item => {
    item.volumeInfo.selfLink = item.selfLink;
    return item.volumeInfo;
    });
}

// Get multiple book results by subject (only their selfLink that lead to their own page)
export function getBooksLinksBySubject(genre) {
  const searchQuery = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
  const resultFields = '&fields=items(selfLink)';
  return axios.get(`${searchQuery}"${genre}"${resultFields}${'&maxResults=15'}`);
}

// Returns a book's full page of information using a selfLink
export function getBookBySelfLink(link) {
  return axios.get(link);
}