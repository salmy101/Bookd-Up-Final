import React, { useState, useEffect, useContext } from "react";
import { cleanUpSearchResults, getBooksBySearch } from "../helpers/booksAPI";
import { addToShelf } from "../helpers/database";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  
useEffect(() => {
  if (!user) {
    navigate('/login');
  }
}, [])

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);



  const startSearch = () => {
    getBooksBySearch(search, page)
    .then(res => {
      setResult(cleanUpSearchResults(res.data.items));
    })
  }

  const getResults = (results) => {
    return results.map((result, index) => {
      return (
        <div key={index} onClick={() => addToShelf(1, result.industryIdentifiers[0].identifier)} style={{border: '1px solid black', width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>{<img src={(result.imageLinks && result.imageLinks.thumbnail) || "images/no-book-thumbnail.png"} alt="Current Book"/>}</div>
        <p><b>{result.title}</b></p>
        <p>{result.publishedDate.split('-')[0]}</p>
        <p>{result.industryIdentifiers[0].identifier}</p>
        <p>{`by ${result.authors[0]}`}</p>
      </div>
      );
    });
  }

  

  return (
    <div style={{marginTop: '100px', marginLeft: '50px', marginBottom: '100px'}}>
      <h2>This is the Search!</h2>
      <form autoComplete='off' onSubmit={event => event.preventDefault()}>
        <input placeholder='Search' value={search} onChange={event => setSearch(event.target.value)}/>
        <button onClick={startSearch}>Search</button>
        <button onClick={() => setPage(page + 1)}>Page Up</button>
        <button onClick={() => (page > 1) ? setPage(page - 1) : null}>Page Down</button>
        <p>Page: {page}</p>
      </form>
      {result.length > 0 && getResults(result)}
    </div>
  );
};