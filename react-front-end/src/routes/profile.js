import React, { useContext, useEffect, useState } from "react"; 
import { UserContext } from "../context/UserContext";
import { cleanUpShelf, getBooksByISBN } from "../helpers/booksAPI";
import axios from 'axios';
import "./profile.scss"
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [clubs, setClubs] = useState({});
  const [shelves, setShelves] = useState({});

  useEffect(() => {

    if (!user) {
      navigate('/login');
    }

    Promise.all([
      axios.get(`/api/users/${user && user.id}`),
      axios.get(`/api/users/${user && user.id}/clubs`),
      axios.get(`/api/users/${user && user.id}/shelves`)
    ])
    .then(res => {
      // setUser(res[0].data.user);
      setClubs(res[1].data);

      // Send ISBNs to helper function and get back promises to get data from book API
      Promise.all([
        getBooksByISBN(res[2].data.current),
        getBooksByISBN(res[2].data.want),
        getBooksByISBN(res[2].data.have)
      ])
      .then(res => {
        // Clean up the returned book data before setting state
        setShelves({
          current: cleanUpShelf(res[0]),
          want: cleanUpShelf(res[1]),
          have: cleanUpShelf(res[2])
        })
      });
    });
  }, []);

  const create = () => {
    navigate("/create")
  }
  
  const getClubs = (clubs) => {
    return clubs.map(club => {
      return (
        <div key={club.id} style={{border: '1px solid black', width: '500px'}}>
          <img src="images/default-club.png" alt="Default Club" style={{borderRadius: 10, width: '50px'}}/>
          <h4>{club.name}</h4>
          <p>{club.description}</p>
        </div>
      );
    });
  }

  const getShelfBooks = (shelf) => {
    return shelf.map((book, index) => {
      return (
        <div key={index} style={{border: '1px solid black', width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div>{<img src={book.imageLinks.thumbnail} alt="Shelf Book"/>}</div>
          <p><b>{book.title}</b></p>
          <p>{`by ${book.authors[0]}`}</p>
        </div>
      );
    });
  }

  return (
    <div style={{marginTop: '100px', marginLeft: '50px', marginBottom: '50px'}}>
      <img src="images/default-profile.png" alt="Default Profile" style={{borderRadius: '50%', width: '200px'}}/>
      <h1>{user && user.first_name} {user && user.last_name}</h1>
      <h2>Book Clubs:</h2>
      <h3>Created clubs:</h3>
      <div className="cta-box">
            <button onClick={create} className="cta-button">Start a Bookclub</button>
          </div>
      {clubs.created && clubs.created.length > 0 && getClubs(clubs.created)}
      <h3>Joined clubs:</h3>
      {clubs.joined && clubs.joined.length > 0 && getClubs(clubs.joined)}
      <h2>Bookshelves:</h2>
      <h3>Currently reading:</h3>
      {(shelves.current && shelves.current.length > 0 && getShelfBooks(shelves.current)) || 'Not currently reading a book'}
      <h3>Want to read:</h3>
      {(shelves.want && shelves.want.length > 0 && getShelfBooks(shelves.want)) || 'No books you want to read yet'}
      <h3>Finished reading:</h3>
      {(shelves.have && shelves.want.have > 0 && getShelfBooks(shelves.have)) || "No finished books yet"}
    </div>
  );
};