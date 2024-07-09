import React, { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
// const dataForm = {
//     username: "Abdelaziz",
//     email:"azizmahamta@gmail.com",
//     password:"qwerty123"
// }
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = {
      username,
      email,
      password,
    };
    console.log(dataForm);
    if (!dataForm.username || !dataForm.email || !dataForm.password) {
      return console.log("Please fill out all fields!");
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dataForm }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 5000);
      } else {
        setLoading(false);
        console.log(data.error);
        throw new Error(data.error);
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
      </form>
    </div>
  );
};

export default SignUp;
