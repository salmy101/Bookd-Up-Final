import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

export default function SignUp() {
  const [emailAtReg, setEmailAtReg] = useState("");
  const [passwordAtReg, setPasswordAtReg] = useState("");
  const navigate = useNavigate();

  const register = () => {
    Axios.post("/api/users", {
      email: emailAtReg,
      password: passwordAtReg,
      first_name: "Salma",
      last_name: "Ibrahim",
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };

  return (
    <section className="sign-up-section">
      <div className="sign-up-header-box">
        <h1 className="sign-up-header"> Sign Up</h1>
      </div>

      <div className="form-box">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="form-container">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmailAtReg(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-container">
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPasswordAtReg(e.target.value);
              }}
            ></input>
          </div>
        </form>

        <button onClick={register} className="signup-btn">
          {" "}
          Sign Up
        </button>
      </div>
    </section>
  );
}
