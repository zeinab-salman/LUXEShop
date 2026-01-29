import './Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from '../../components/FormInput/FormInput';
import { motion } from 'framer-motion';

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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.email === form.email);
    if (exists) {
      alert("This account is already created");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email.trim(),
      password: form.password.trim(),
      address: "",
      photo: ""
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <section className='register-sec flex-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form className='register-form' onSubmit={handleSubmit}>
          <h2>Register</h2>

          <FormInput
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <FormInput
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <FormInput
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <FormInput
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />

          <button type="submit">Register</button>
        </form>
      </motion.div>
    </section>
  );
}
