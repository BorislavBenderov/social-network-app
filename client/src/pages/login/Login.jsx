import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";
import "./Login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    const authData = {
      email,
      password,
    };

    login(authData)
      .then((req) => {
        userLogin(req.data);
        navigate("/");
      })
      .catch((err) => {
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
            <button onClick={onLogin} className="login__button">
              Log In
            </button>
            <span className="login__forgot">Forgot Password?</span>
            <button className="login__register__button">
              <Link to="/register">Create a New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
