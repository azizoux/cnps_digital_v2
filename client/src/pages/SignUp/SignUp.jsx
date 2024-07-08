import React, { useState } from "react";
import "./SignUp.css";
// const dataForm = {
//     username: "Abdelaziz",
//     email:"azizmahamta@gmail.com",
//     password:"qwerty123"
// }
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (!dataForm.username || !dataForm.email || !dataForm.password) {
      return console.log("Please fill out all fields!");
    }
    try {
      const response = await fetch("http://localhost:5173/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataForm }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(username, password, email);
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
        <button className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
};

export default SignUp;
