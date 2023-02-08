import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { register } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    const authData = {
      username,
      email,
      password,
    };

    register(authData)
      .then((req) => {
        userLogin(req.data);
        navigate("/");
      })
      .then((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">Social Network</h3>
          <span className="login__desc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="login__right">
          <div className="login__box">
            <input
              className="login__input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="login__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="login__input"
              placeholder="Password Again"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button onClick={onRegister} className="login__button">
              Sign Up
            </button>
            <button className="login__register__button">
              <Link to="/login">Log into Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
