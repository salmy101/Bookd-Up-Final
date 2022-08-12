import React, { useState } from "react";
import { cleanUpSearchResults, getBooksBySearch } from "../helpers/booksAPI";
import { addToShelf } from "../helpers/database";
import "./search2.scss";

export default function Search() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);

  const startSearch = () => {
    getBooksBySearch(search, page).then((res) => {
      setResult(cleanUpSearchResults(res.data.items));
    });
  };

  const getResults = (results) => {
    return results.map((result, index) => {
      return (
        <div
          className="book-container"
          key={index}
          onClick={() =>
            addToShelf(1, result.industryIdentifiers[0].identifier)
          }
        >
          <div className="image-box">
            {
              <img
                className="book-image"
                src={
                  (result.imageLinks && result.imageLinks.thumbnail) ||
                  "images/no-book-thumbnail.png"
                }
                alt="Current Book"
              />
            }
          </div>

          <div className="book-details-box">
            <p className="book-title">
              <b>{result.title}</b>
            </p>
            <p className="book-year">
              Year of Publication: {result.publishedDate.split("-")[0]}
            </p>
            <p className="book-isbn">
              ISBN: {result.industryIdentifiers[0].identifier}
            </p>
            <p className="book-author">Author: {` ${result.authors[0]}`}</p>
            <button className="more-details"> See more </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="search-container">
      <h2>Search Bookd-Up</h2>
      <form
        className="search-form"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="button-box">
          <button className="search-buttons" onClick={startSearch}>
            Search
          </button>
        </div>
      </form>

      <div className="container">{result.length > 0 && getResults(result)}</div>
      <div className="pagination-btn">
        <button
          className="search-buttons"
          onClick={() => (page > 1 ? setPage(page - 1) : null)}
        >
          Prev
        </button>
        <button className="search-buttons" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
