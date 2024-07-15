import React, { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import logo from "../../assets/logo.png";
import "./SignIn.css";
import { useNavigate, Link } from "react-router-dom";

const SignIn = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      console.log("Ouf! une situation inattendu s'est produite...");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Please fill out all fields!");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      if (response.ok === true) {
        setLoading(false);
        setCurrentUser(data);
        navigate("/services");
      } else {
        setLoading(false);
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      {message && (
        <div className="message">
          <span>{message}</span>
        </div>
      )}
      <div className="sign-in">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit}>
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
          <div className="text-signup">
            Vous n'avez pas encore de compte ?
            <span>
              <Link to={"/sign-up"}>S'Enregistrer</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
