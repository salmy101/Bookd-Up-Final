import React, { useContext } from "react"; 
import { UserContext } from "../context/UserContext";
import "./profile.scss"

export default function Profile() {
  const value = useContext(UserContext);
  const { user } = value  


  return(
    <div>
    <h1>HELLO {user.first_name} {user.last_name}</h1>    
    <h1>HELLO {user.first_name} {user.last_name}</h1>
    </div>
    
  )
}