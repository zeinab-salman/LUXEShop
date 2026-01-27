import "./Login.css"
import { useState } from "react";
import { AuthProvider } from "../../components/NavBar/AuthProvider";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import { useAuth } from "../../components/NavBar/AuthProvider";
import { motion } from "framer-motion";
export default function Login() {
  const { login } = useAuth();
  const handleSubmit = async () => {
    const token = "token_coming_from_server";
    login(token);
  };

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ scale: 1.05 }}
          className=''
        >
          <form className="form" onSubmit={handleLogin}>
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
            <button type="submit" onClick={handleSubmit}>Login</button>

            <p>
              Don’t have an account? <Link to="/register">Register</Link>
            </p>


          </form>
        </motion.div>
      </section>


    </>
  );
}
