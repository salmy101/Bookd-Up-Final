import React from "react";
import "./main.scss";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate massa et posuere dictum. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas
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
          <div className="popular-bookclubs-card">First Card</div>
          <div className="popular-bookclubs-card">Second Card</div>
          <div className="popular-bookclubs-card">Third Card</div>
          <div className="popular-bookclubs-card">Fourth Card</div>
          <div className="popular-bookclubs-card">Fifth Card</div>
          <div className="popular-bookclubs-card">Last card</div>
        </div>
      </div>
    </section>
  );
}
