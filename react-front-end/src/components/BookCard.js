import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import "../search.css";


export default function BookCard(){

  const { open, setOpen } = useContext(UserContext);

  const toggleModal = () => {
    setOpen(!open);
  };


  return(
    
    <div className="search-bookclubs-container">
    <div className="search-bookclubs-card">
      <div className="search-bookclubs-text">First Card</div>
      <button           
        onClick={toggleModal}
        className="search-more-btn">See more</button>
    </div>
    
   
    {open && ( 
      <div className="popup">
       {/* <div onClick={toggleModal} className="overlay"></div> */}
        <div className="popup-img"> </div>
        <h2 className="popup-header">Hello</h2>
        <p className="synopsis">Lorem</p>
        <button 
        onClick={toggleModal}
        className="popup-close-btn">
          Close
        </button>
        </div>
        ) }
  </div>
  
  )

}