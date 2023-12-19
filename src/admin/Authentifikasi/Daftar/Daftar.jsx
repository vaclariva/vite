import React, { useState } from "react";
import "./Daftar.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Daftar = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savedata = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/admin", {
      username: username,
      email: email,
      password: password,
    });
    window.location.href = "/masuk";
  };

  return (
    <div className="box-form">
      <div className="left">
        {/* <div className="overlay">
          <h1>Job Connect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed felis aliquet sollicitudin</p>
        </div> */}
      </div>

      <div className="right">
        <h5>Daftar</h5>
        <p>
          <br />
          <br />
        </p>
        <div className="inputs">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setName(e.target.value)} required />
          <br />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <br />
        <button type="button" className="btn style1 w-100 d-block" onClick={savedata}>
          Daftar
        </button>
      </div>
    </div>
  );
};
export default Daftar;
