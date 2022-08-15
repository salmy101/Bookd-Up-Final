import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import BookCardFull from "../components/BookCardFull";
import { cleanUpSearchResults, getBooksBySearch } from "../helpers/booksAPI";
import { addToShelf } from "../helpers/database";
import "./styles/search.scss";

export default function Search() {

  // const { user } = useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [result, setResult] = useState([]);

  const startSearch = () => {
    getBooksBySearch(search, page, filter).then((res) => {
      setResult(cleanUpSearchResults(res.data.items));
    });
  };

  useEffect(() => {
    if (search){
      startSearch();
    }
  }, [page]);

  const getResults = (results) => {
    return results.map((result, index) => {
      return (
      <BookCard
        key={index}
        thumbnail={(result.imageLinks && result.imageLinks.thumbnail) || "images/no-book-thumbnail.png"}
        title={result.title}
        year={result.publishedDate.split("-")[0]}
        author={result && result.authors && result.authors[0]}
        />
      );
    });
  };

  return (
    <>
      <div className="search-container">
        <h2>Find a book:</h2>
        <form className="search-form" onSubmit={event => event.preventDefault()} autoComplete="off">
          <input placeholder="Search" value={search} onChange={event => setSearch(event.target.value)}/>
          <div className="button-box">
            <button className="search-buttons" onClick={startSearch}>
              Search
            </button>
          </div>
        </form>
        <div className="filters-container">
          <input defaultChecked type="radio" name="filter" onClick={() => setFilter('')}/>All&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="filter" onClick={() => setFilter('intitle:')}/>Title&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="filter" onClick={() => setFilter('subject:')}/>Genre&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="filter" onClick={() => setFilter('inauthor:')}/>Author&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <div className="results-container">{result.length > 0 && getResults(result)}</div>
      
      <div className={`pagination-btn${result.length > 0 ? '--show' : ''}`}>
        <button className="search-buttons" onClick={() => page > 1 ? setPage(page - 1) : null}>
          Prev
        </button>
        <span style={{fontWeight: '800'}}>{page}</span>
        <button className="search-buttons" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <BookCardFull selfLink={'https://www.googleapis.com/books/v1/volumes/FY_HWAcm10MC'} />
    </>
  );
}
