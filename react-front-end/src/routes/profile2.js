import React from "react";
import "./profile2.scss";
import profileimage from "./profileimage.png";
import profileimage2 from "./profileimage2.png";

const Profile = () => {
  return (
    <section className=" profile-section">
      <div className="profile-container">
        <img className="profile-image" src={profileimage} />
        <h2 className="user-name">Salma Ibrahim</h2>
        <span></span>
      </div>

      <div className="user-club-header">
        <h3 className="user-clubs">My Clubs</h3>
      </div>

      <div className="user-club-section">
        <div className="user-club-details">
          <div className="user-club-image">
            <img className="bookclub-image" src={profileimage2} />
          </div>

          <div className="user-details-box">
            <h4> The Late Night Club</h4>
            <span>Studio Ghilbi themed bookclub</span>
            <span>4 active members</span>
            <a className="invite" href="/">
              INVITE LINK
            </a>
          </div>
        </div>

        <div className="user-club-details">
          <div className="user-club-image">
            <img className="bookclub-image" src={profileimage2} />
          </div>
          <div className="user-details-box">
            <h4> Salma's Club</h4>
            <span>Studio Ghilbi themed bookclub</span>
            <span>4 active members</span>
            <a className="invite" href="/">
              INVITE LINK
            </a>
          </div>
        </div>

        <div className="user-club-details">
          <div className="user-club-image">
            <img className="bookclub-image" src={profileimage2} />
          </div>
          <div className="user-details-box">
            <h4> The Avengers Team</h4>
            <span>Studio Ghilbi themed bookclub</span>
            <span>4 active members</span>
            <a className="invite" href="/">
              INVITE LINK
            </a>
          </div>
        </div>

        <div className="user-club-details">
          <div className="user-club-image">
            <img className="bookclub-image" src={profileimage2} />
          </div>
          <div className="user-details-box">
            <h4>Derby Club</h4>
            <span>Studio Ghilbi themed bookclub</span>
            <span>4 active members</span>
            <a className="invite" href="/">
              INVITE LINK
            </a>
          </div>
        </div>
      </div>
      <div className="user-shelves-header">
        <h3 className="user-shelves">My Shelves</h3>
      </div>

      <div className="user-shelves-section">
        <span>Currently Reading</span>
        <div className="user-shelves-container">
          <div className="user-shelves-card">First Card</div>
          <div className="user-shelves-card">Second Card</div>
          <div className="user-shelves-card">Third Card</div>
          <div className="user-shelves-card">Fourth Card</div>
          <div className="user-shelves-card">Fifth Card</div>
          <div className="user-shelves-card">Last card</div>
        </div>
      </div>

      <div className="user-shelves-section">
        <span>Want To Read</span>
        <div className="user-shelves-container">
          <div className="user-shelves-card">First Card</div>
          <div className="user-shelves-card">Second Card</div>
          <div className="user-shelves-card">Third Card</div>
          <div className="user-shelves-card">Fourth Card</div>
        </div>
      </div>

      <div className="user-shelves-section">
        <span>Read</span>
        <div className="user-shelves-container">
          <div className="user-shelves-card">First Card</div>
          <div className="user-shelves-card">Second Card</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
