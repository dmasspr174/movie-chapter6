import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/action/auth";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    dispatch(register(data, navigate));
  };

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="Login">
      <h2>
        <strong>Sign Up</strong>
      </h2>
      <form className="loginForm" onSubmit={onSubmit}>
        <label>Full Name</label>
        <input
          className="inputLoginEmail"
          placeholder=" Full name"
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label>Email</label>
        <input
          className="inputLoginEmail"
          placeholder="  Email"
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label>Password</label>
        <input
          id="myInput"
          className="inputLoginPassword"
          placeholder="  Password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div className="radioButton">
          <input
            className="me-2"
            type="checkbox"
            onClick={() => myFunction()}
          />
          Show Password
        </div>{" "}
        <div className="registerButton">
          <Button
            className="ps-5 pe-5 mt-4 buttonLogin"
            variant="danger"
            type="submit"
          >
            <strong>Sign Up</strong>
          </Button>
          <Button
            className="ps-5 pe-5 mt-4 buttonLogin"
            variant="outline-danger"
            onClick={() => navigate("/")}
          >
            <strong>Cancel</strong>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
