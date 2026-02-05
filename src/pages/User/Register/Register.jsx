import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput/FormInput";
import { isValidMotionProp, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useStore } from "../../../components/Data/StoreData";
export default function Register() {
  const { state } = useLocation(); // الحصول على البيانات المرسلة من الصفحة الأخرى
  const isBlocked = state?.isBlocked; // التحقق مما إذا تم إرسال قيمة isBlocked
const isAdmin = state?.isAdmin;
  const [status1, setStatus1] = useState("active"); 
  // القيمة الافتراضية هي "نشط"
  const [role, setRole] = useState("user");
  console.log(status1);
  console.log(role);
  // عندما نصل إلى هذه الصفحة، نحدث status1 بناءً على isBlocked
  useEffect(() => {
    if (isBlocked !== undefined) {
      setStatus1(isBlocked ? "blocked" : "active");
    }
  }, [isBlocked]); // يتم التحديث عند تغير قيمة isBlocked
useEffect(() => {
    if (isAdmin !== undefined) {
      setRole(isAdmin ? "admin" : "user");
    }
  }, [isAdmin]); 
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
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((u) => u.email === form.email);
    if (exists) {
      toast.error("This account is already created", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email.trim(),
      password: form.password.trim(),
      address: "",
      photo: "",
      status1: "active",
      role: "user",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully", {
      duration: 4000,
      position: "top-center",
      removeDelay: 1000,
      toasterId: "default",
      className: "toaster",
    });

    storeUsers(newUser);

    navigate("/login");
  };
  console.log(localStorage);

  return (
    <section className="register-sec flex-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="motion-form"
      >
        <form className="register-form" onSubmit={handleSubmit}>
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
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <button type="submit">Register</button>
        </form>
      </motion.div>
    </section>
  );
}
