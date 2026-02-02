import './Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from '../../../components/FormInput/FormInput';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import { useStore } from '../../../components/Data/StoreData';
export default function Register() {
  const { storeUsers } = useStore();
  console.log(localStorage);
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
      toast.error("Passwords do not match", {

        duration: 4000,
        position: 'top-center',
        removeDelay: 1000,
        toasterId: 'default',
        className: 'toaster',
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.email === form.email);
    if (exists) {
      toast.error("This account is already created", {
        duration: 4000,
        position: 'top-center',
        removeDelay: 1000,
        toasterId: 'default',
        className: 'toaster',

      });
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

    toast.success("Account created successfully", {
      duration: 4000,
      position: 'top-center',
      removeDelay: 1000,
      toasterId: 'default',
      className: 'toaster',

    });
    
 storeUsers(newUser); 
 
  

    navigate("/login");
  };
console.log(localStorage);
  return (
    <section className='register-sec flex-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='motion-form'
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
