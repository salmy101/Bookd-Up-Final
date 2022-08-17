import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { cleanUpShelf, getBooksByISBN } from "../helpers/booksAPI";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import BookCardFull from "../components/BookCardFull";
import "./styles/profile.scss";

export default function Profile() {

  const { user } = useContext(UserContext);
  const [clubs, setClubs] = useState({});
  const [shelves, setShelves] = useState({});
  const [bookSelfLink, setBookSelfLink] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    Promise.all([
      axios.get(`/api/users/${user && user.id}/clubs`),
      axios.get(`/api/users/${user && user.id}/shelves`),
    ]).then((res) => {
      setClubs(res[0].data);

      // Send ISBNs to helper function and get back promises to get data from book API
      Promise.all([
        getBooksByISBN(res[1].data.current),
        getBooksByISBN(res[1].data.want),
        getBooksByISBN(res[1].data.have),
      ]).then((res) => {
        // Clean up the returned book data before setting state
        setShelves({
          current: cleanUpShelf(res[0]),
          want: cleanUpShelf(res[1]),
          have: cleanUpShelf(res[2]),
        });
      });
    });
  }, []);

  const create = () => {
    navigate("/create");
  };

  const getClubs = (clubs) => {
    return clubs.map(club => {
      return (
        <div key={club.id} className="user-club-details">
          <div className="user-club-image">
            <img className="bookclub-image" src={club.image_url || "images/default-club.png"} alt="Default" />
          </div>
          <div className="user-details-box">
            <h4>{club.name}</h4>
            <p>{club.description}</p>
            <Link className="club-links" to={`/club/${club.id}`}>Visit The Club!</Link>
          </div>
        </div>
      );
    });
  };

  const getShelfBooks = (shelf) => {
    return shelf.map((book, index) => {
      return (
        <BookCard
          key={index}
          thumbnail={(book.imageLinks && book.imageLinks.thumbnail) || "images/no-book-thumbnail.png"}
          title={book.title}
          year={book.publishedDate.split("-")[0]}
          author={book && book.authors && book.authors[0]}
          selfLink={book && book.selfLink}
          setBookSelfLink={setBookSelfLink}
        />
      );
    });
  }

  return (
    <section className=" profile-section">
      <div className="profile-container">
        <img className="profile-image" src="images/default-profile.png" alt="Default Profile" />
        <h2 className="user-name">
          {user && user.first_name} {user && user.last_name}
        </h2>
        <span></span>
      </div>

      <div className="user-club-header">
        <h1 className="user-clubs">Created Club</h1>
        {clubs.created && clubs.created.length === 0 && (
          <div className="cta-box">
            <button onClick={create} className="cta-button">
              Start a Bookclub
            </button>
          </div>
        )}
      </div>

      <div className="user-club-section">
        {clubs.created && clubs.created.length > 0 && getClubs(clubs.created)}
      </div>

      <div className="user-club-header">
        <h1 className="user-clubs">Joined Clubs</h1>
      </div>
      <div className="user-club-section">
        {clubs.joined && clubs.joined.length > 0 && getClubs(clubs.joined)}
      </div>

      <div className="user-shelves-header">
        <h1 className="user-shelves">My Shelves</h1>
      </div>

      <div className="user-shelves-section">
        <h2>Currently Reading</h2>
        <div className="user-shelves-container">
          {(shelves.current &&
            shelves.current.length > 0 &&
            getShelfBooks(shelves.current)) ||
            "Not currently reading a book"}
        </div>
      </div>

      <div className="user-shelves-section">
        <h2>Want to Read</h2>
        <div className="user-shelves-container">
          {(shelves.want &&
            shelves.want.length > 0 &&
            getShelfBooks(shelves.want)) ||
            "No books you want to read yet"}
        </div>
      </div>

      <div className="user-shelves-section">
        <h2>Finished Reading</h2>
        <div className="user-shelves-container">
          {(shelves.have &&
            shelves.have.length > 0 &&
            getShelfBooks(shelves.have)) ||
            "No finished books yet"}
        </div>
      </div>
      {bookSelfLink && <BookCardFull setBookSelfLink={setBookSelfLink} selfLink={bookSelfLink} />}
    </section>
  );
};