import "./Login.css"
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful");
  };

  return (
  <>
  <section className="login-sec flex-center">
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </form>
    </section>


  </>
  );
}
