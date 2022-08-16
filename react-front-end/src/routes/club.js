import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { cleanUpShelf, getBooksByISBN } from "../helpers/booksAPI";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/club.scss";

export default function Club() {
  const { id } = useParams();
  console.log(id);

  const [bookclub, setBookclub] = useState({});
  const [currentBook, setCurrentBook] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get(`/api/clubs/${id}`).then((res) => {
      setBookclub(res.data);
      console.log(bookclub);
      console.log(user);

      // Send ISBNs to helper function and get back promises to get data from book API
      Promise.all([
        getBooksByISBN([res.data.club.current_book]),
        getBooksByISBN(res.data.finished),
      ]).then((res) => {
        setCurrentBook(cleanUpShelf(res[0]));
        console.log("current book", currentBook);
        setFinishedBooks(cleanUpShelf(res[1]));
      });
    });
  }, []);

  useEffect(() => {
    if (bookclub.creator && user.id === bookclub.creator.id) {
      setIsAdmin(true);
    }
  }, [bookclub]);

  // Return <li>'s made from members array
  const getMembers = (members) => {
    return members.map((member) => (
      <li key={member.id}>{`${member.first_name} ${member.last_name}`}</li>
    ));
  };

  // Return array of finished books with image, title, and author
  const getFinishedBooks = (finished) => {
    return finished.map((book, index) => {
      return (
        <div
          key={index}
          style={{
            border: "1px solid black",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {<img src={book.imageLinks.thumbnail} alt="Current Book" />}
          </div>
          <p>
            <b>{book.title}</b>
          </p>
          <p>{`by ${book.authors[0]}`}</p>
        </div>
      );
    });
  };

  const finish = () => {
    console.log("Finished");
    axios
      .post(`/api/clubs/${bookclub.club.id}/complete`, {
        isbn: currentBook[0].industryIdentifiers[0].identifier,
      })
      .then((res) => {
        //clicking finished will remove the current read for BC to the finished
        console.log(res);
        setCurrentBook([]);
      });
  };

  const navigate = useNavigate();
  const add = () => {
    navigate("/search");
  };

  return (
    <div>
      <div className="club-header">
        <img
          className="default-bookclub-img"
          src="../images/avengers.png"
          alt="Default Club"
        />
        <div className="club-header-text">
          <h1 className="club-name">{bookclub.club && bookclub.club.name}</h1>
          <p className="club-description">
            {bookclub.club && <em>{bookclub.club.description}</em>}
          </p>
          <h4 className="creator">
            {bookclub.creator &&
              `Created by: ${bookclub.creator.first_name} ${bookclub.creator.last_name}`}
          </h4>
          <button className="join-club" href="#">
            Join Club
          </button>
        </div>
      </div>
      <div className="club-body">
        <h3 className="members-count">
          Members {`(${bookclub.club && bookclub.club.member_count})`}
        </h3>
        {(bookclub.members && bookclub.members.length > 0 && (
          <ul className="members">{getMembers(bookclub.members)}</ul>
        )) || <p>No members yet</p>}
        <div className="current-books-box">
          <h3 className="current-books">Currently reading</h3>
          <div>
            {currentBook.length > 0 && (
              <img
                src={currentBook[0].imageLinks.thumbnail}
                alt="Current Book"
              />
            )}
            <p>
              <b>{currentBook.length > 0 && currentBook[0].title}</b>
            </p>
            <p>
              {(currentBook.length > 0 && `by ${currentBook[0].authors[0]}`) ||
                "Not currently reading a book"}
            </p>
          </div>
        </div>
      </div>

      {isAdmin && (
        <div className="cta-box">
          {currentBook.length > 0 ? (
            <button onClick={finish} className="cta-button">
              Finished Reading?
            </button>
          ) : (
            <button onClick={add} className="cta-button">
              Pick a new Book
            </button>
          )}
          <h3>Finished reading:</h3>
          {(finishedBooks.length > 0 && getFinishedBooks(finishedBooks)) ||
            "No finished books"}
        </div>
      )}
    </div>
  );
}
