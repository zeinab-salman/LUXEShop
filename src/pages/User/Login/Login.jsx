import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput/FormInput";
import { useAuth } from "../../../components/NavBar/AuthProvider";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users in LocalStorage:", users);


    const user = users.find(
      u => u.email === email.trim() && u.password === password.trim()
    );

    if (!user) {
      toast.error("There is no account", {
        duration: 4000,
        position: 'top-center',
        removeDelay: 1000,
        toasterId: 'default',
        className: 'toaster',
      });
      return;
    }

    login("dummy-token", user);
    navigate("/VerificationCode");
  };

  return (

    <section className="login-sec flex-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="motion-form"
      >
        <form className="form  " onSubmit={handleSubmit}>
          <h2>Login</h2>

          <FormInput
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
