import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "./login";
import Profile from "./Profile";

export default function Auth() {
  const { isLoggedIn } = useContext(UserContext);


  return <>{isLoggedIn ? <Profile /> : <Login />}</>;
}