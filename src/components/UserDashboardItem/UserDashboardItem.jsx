import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboardItem.css";
import { motion } from "framer-motion";
import img1 from "../../../public/images/profile.jpg";
import Button from "../Button/Button";
export default function UserDashboardItem({
  id,
  name,
  date,
  photo,
  email,
  address,
  status1,
  role
}) {
  const navigate = useNavigate();
  const defaultImage = img1;
  const formatDate = (date) => {
    if (!date) return "No Date";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  const [isBlocked, setIsBlocked] = useState(status1 === "blocked");
  const [isAdmin, setIsAdmin] = useState(role === "admin");
  useEffect(()=>{
      const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.id === id);
    if (user) {
      setIsAdmin(user.role === "admin");
    }
  },[id]);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.id === id);
    if (user) {
      setIsBlocked(user.status1 === "blocked");
    }
  }, [id]);

  const toggleBlock = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        user.status1 = !isBlocked ? "blocked" : "active";
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsBlocked((prevStatus) => !prevStatus);
    navigate("/Login", {
      state: { isBlocked: !isBlocked },
    });
  };
//////
 const toggleAdmin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        user.role = !isAdmin ? "admin" : "user";
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsAdmin((prevStatus) => !prevStatus);
    navigate("/Login", {
      state: { isAdmin: !isAdmin },
    });

  };

/////
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileInView={{ scale: 1.05 }}
      className="motion-div-dash-item"
    >
      <div className="user-dash-item">
        <ul>
          <li>
            <img src={photo || defaultImage} alt={`user-${id}`} />
          </li>
          <li>{id}</li>
          <li>{name}</li>
          <li>{isBlocked ? "Blocked" : "Active"}</li>
           <li>{isAdmin ? "admin" : "user"}</li>
          <li>{email || "No email available"}</li>
          <li>{formatDate(date)}</li>
          <li>{address || "No address available"}</li>
          <li>
            <Button
              text={isBlocked ? "Unblock User" : "Block User"}
              type="product-item-btn"
              onClick={toggleBlock}
            />
          </li>
           <li>
            <Button
              text={isAdmin ? "User" : "Admin"}
              type="product-item-btn"
              onClick={toggleAdmin}
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
