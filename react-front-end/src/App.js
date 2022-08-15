import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import { UserContextProvider } from "./context/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//pages
import MainPage from "./routes/main";
import Club from "./routes/club";
import Search from "./routes/search";

import Match from "./routes/match";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import Profile from "./routes/profile";
import Create from "./routes/create";

export default function App() {


  return (
      <UserContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/club/:id" element={<Club />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
    </Router>
    </UserContextProvider>
  );
  
}
