import React from "react";
import "./Login.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Job Connect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed felis aliquet sollicitudin</p>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <p>
          <br />
          <br />
        </p>
        <div className="inputs">
          <input
            type="text"
            placeholder="Email"
            id="emailInput"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>

        <br />
        <br />

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
        </div>

        <br />
        <Link to="/landing">
          <button className="landing-button">Login</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
