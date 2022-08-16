import axios from 'axios';

export function addToShelf(id, isbn, shelf = 'have_reads') {
  axios.post(`/api/users/${id}/shelves`, {isbn, shelf})
  .then(res => console.log(res));
}

export function addToClubCurrentBook(id, isbn) {
  axios.post(`/api/users/${id}/clubs/current`, { isbn })
  .then(res => console.log(res));
}