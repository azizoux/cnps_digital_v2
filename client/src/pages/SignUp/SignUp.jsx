import React, { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      console.log("Ouf! une situation inattendu s'est produite...");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      console.log("Please fill out all fields!");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok === true) {
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setLoading(false);
      } else if (data.error.errorResponse.code === 11000) {
        setMessage("l'utilisateur " + username + " existe deja");
        console.log(data.error);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        setLoading(false);
      } else {
        setMessage("Erreur interne du server...");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="sign-up">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        excepturi. Suscipit, quis incidunt quo expedita porro voluptates eum
        aspernatur sequi!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            id="username"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            id="email"
            onChange={handleChange}
            className="input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            onChange={handleChange}
            className="input"
            type="password"
            placeholder="Password"
          />
        </div>
        {loading ? (
          <div className="loading">
            <span className="">Loading...</span>
            <ImSpinner3 />
          </div>
        ) : (
          <button className="btn btn-primary">Enregistrer</button>
        )}
        <span>{message && message}</span>
      </form>
    </div>
  );
};

export default SignUp;
