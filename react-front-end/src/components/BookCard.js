import React from "react";
import './BookCard.scss';

export default function BookCard(props) {

  const { thumbnail, title, year, author } = props;


  return (
    <div className="book-container">
      <img className="book-image" src={thumbnail} alt="Result Book"/>
      <div className="book-details-box">
        <div className="book-title">
          <b>{title}</b>
        </div>
        <div className="book-year">
          {year}
        </div>
        <div className="book-author">{author}</div>
      </div>
    </div>
  );
}