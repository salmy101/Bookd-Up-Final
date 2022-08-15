import React, { useEffect, useState } from "react";
import { getBookBySelfLink } from "../helpers/booksAPI";
import "./BookCardFull.scss";


export default function BookCardFull(props) {

  const { selfLink } = props;
  const [book, setBook] = useState();
  const [show, setShow] = useState('');

  useEffect(() => {
    getBookBySelfLink(selfLink)
    .then(res => {
      setBook(res.data.volumeInfo);
      setShow('--show');
    });
  }, []);

  return (
    <div className={`book-full${show}`}>
      <div className="book-full-overlay">
        <div className="book-full-container">
          <img className="book-full-close-btn" onClick={() => setShow('')} src="images/close-full-book.png" alt="Close Button"/>
          <div className="book-full-left">
            {book && book.title && <div style={{fontWeight: 900, fontSize: "x-large"}}>{book.title}</div>}
            {book && book.subtitle && <div style={{fontWeight: 700}}>{book.subtitle}</div>}
            {book && book.pageCount && <div className="book-full-info"><span>Pages: </span>{book.pageCount}</div>}
            {book && book.categories && <div className="book-full-info"><span>Genre: </span>{book.categories[0]}</div>}
            {book && book.publishedDate && <div className="book-full-info"><span>Date published: </span>{book.publishedDate}</div>}
            {book && book.authors && <div className="book-full-info"><span>Author: </span>{book.authors[0]}</div>}
            {book && book.publisher && <div className="book-full-info"><span>Publisher: </span>{book.publisher}</div>}
            {book && book.industryIdentifiers && <div className="book-full-info"><span>ISBN: </span>{book.industryIdentifiers[0].identifier}</div>}
            {book && book.description && <div style={{fontWeight: 600}}>Description:</div>}
            {
            book && book.description && 
            <div className="book-full-description" dangerouslySetInnerHTML={{__html: book.description}}></div>
            }
          </div>

          <div className="book-full-right">
            <img
              className="book-full-cover"
              src={(book && book.imageLinks && (
                book.imageLinks.large ||
                book.imageLinks.medium ||
                book.imageLinks.small ||
                book.imageLinks.thumbnail||
                "images/no-book-thumbnail.png")) ||
                "images/no-book-thumbnail.png"}
              alt="Full Book Cover"
            />
            <div style={{fontWeight: 800}}>Add to:</div>
            <div className="add-to-btns">My Shelf</div>
            <div className="add-to-btns">Bookclub's Currently Reading</div>
          </div>

        </div>
      </div>
    </div>
  );


}