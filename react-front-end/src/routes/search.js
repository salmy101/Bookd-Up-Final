import React, {useContext, useEffect} from "react";
import BookCard from "../components/BookCard";
import "./search.scss";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Search = () => {


  return (
    <section className="search-section">
      <div className="search-form">
        <form className="search-bar">
          <input type="text" placeholder="Search for Books"></input>
        </form>
      </div>
      <BookCard />
          
     
      {/* <div className="search-bookclubs-container">
        <div className="search-bookclubs-card">
          <div className="search-bookclubs-text">First Card</div>
          <button className="search-more-btn">See more</button>
        </div>

        <div className="search-bookclubs-card">
          <div className="search-bookclubs-text">Second Card</div>
          <button className="search-more-btn">See more</button>
        </div>
        <div className="search-bookclubs-card">
          <div className="search-bookclubs-text">Third Card</div>
          <button className="search-more-btn">See more</button>
          <div className="popup">
            <div className="popup-img"> </div>
            <h2 className="popup-header">Hello</h2>
            <p className="synopsis">Lorem</p>
            <button className="popup-close-btn">Close</button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Search;