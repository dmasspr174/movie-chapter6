import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/auth";
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
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
        <strong>Login</strong>
      </h2>
      <form className="loginForm" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          className="inputLoginEmail"
          placeholder="  Email"
          type="text"
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
        <div className="radioButton mb-4">
          <input
            className="me-2"
            type="checkbox"
            onClick={() => myFunction()}
          />
          Show Password
        </div>
        <div className="loginButton">
          <Button
            type="submit"
            className="ps-5 pe-5 buttonLogin"
            variant="danger"
            onClick={login}
          >
            <strong>Login</strong>
          </Button>
          <Button
            className="ps-5 pe-5"
            variant="outline-danger"
            onClick={() => navigate("/")}
          >
            <strong>Cancel</strong>
          </Button>
        </div>
      </form>

      <div className="signInGoogle">
        <GoogleLogin buttonText={"Login With Google"} />
      </div>
    </div>
  );
}

export default Login;
