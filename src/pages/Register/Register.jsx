import './Register.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created");
    navigate("/login");
  };

  return (
    <>
    <section className='register-sec flex-center'>
     
    <form className='register-form' onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input placeholder="Full Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setForm({...form, confirmPassword: e.target.value})} />

      <button type="submit">Register</button>
    </form>





</section>

    </>
  );
}
