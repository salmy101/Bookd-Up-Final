import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./styles/login.scss";
import { UserContext } from "../context/UserContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = () => {
    axios.post("/api/users/login", {
      email: email, 
      password: password,
    })
    .then((res) => { 
      setUser(res.data.user);
      navigate("/profile");
    });
  };




  return (
    
    <section className="login-section">
      <div className="login-header-box">
        <h1 className="login-header">Login</h1>
      </div>

      <div className="form-box">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="form-container">
            <input
              className="login-input"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-container">
            <input
              className="login-input"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </form>

        <button onClick={login} type="submit" className="login-btn">
          Login
        </button>
      </div>
    </section>
  );
};