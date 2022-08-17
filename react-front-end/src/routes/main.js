import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/main.scss";
import profileimage2 from "./profileimage2.png";
import { useNavigate, Link, useParams } from "react-router-dom";
import styled from "styled-components";


export default function MainPage() {
  const [clubs, setClubs] = useState();
  const { id } = useParams();


  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    axios.get(`/api/clubs`).then((res) => {
      setClubs(res.data.clubs);
      console.log("CLUBS", clubs);
    });
  }, []);

  const StyledLink  = styled(Link)`
     font-weight: 400;
     color: #fff;
`;


  const getClubs = (clubs) => {
    return clubs.map((club) => {
      return (
        <div key={club.id} className="popular-bookclubs-card">
            <img className="club-image"
              src={club.image_url || "images/default-profile2.png"}
              alt="Default"
              />
            <div className="club-info"> 
                <h3> {club.name}</h3>
                <p>{club.description}</p>
              <div className="club-link">
                <StyledLink to={`/club/${club.id}`}>Visit The Club!</StyledLink>
            </div>
            </div>
        </div>
      );
    });
  };

  return (
    <section className="main-contianer">
      <div className="content">
        <div className="hero-section">
          <div className="hero-header-box">
            <h1 className="hero-header"> A Book Lovers Hub</h1>
          </div>

          <div className="hero-text-box">
            <span className="hero-text">
              You can build your own virtual bookshelves by using our
              awesome search tool and if you dont know what you are in the mood
              to read checkout Matchbook and match with a book recommended to
              you based on your prefrences. Lastly, make and join a bookclub with
              fellow readers.
            </span>
          </div>
          <div className="cta-box">
            <button onClick={signup} className="cta-button">
              Start a Bookclub
            </button>
          </div>
        </div>
        <div className="hero-image-box">
          <div className="blob"></div>
        </div>
      </div>

      <div className="popular-bookclubs-section">
        <h2 className="popular-bookclubs-header">Bookclubs</h2>
        <div className="popular-bookclubs-container">
          {clubs && getClubs(clubs)}
        </div>
      </div>
    </section>
  );
}
