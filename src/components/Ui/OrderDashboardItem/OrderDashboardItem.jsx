import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./OrderDashboardItem.css";
export default function OrderDashboardItem({
  id,
  name,
  categor,
  date,
  total,
  img,
  onOrderCompleted,
  status,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("all-orders")) || [];
    const order = orders.find((o) => o.userId.id === id);
    if (order) {
      setIsChecked(order.userId.status === "delivered");
    }
  }, [id]);
  const handleCheckBoxChange = () => {
    const orders = JSON.parse(localStorage.getItem("all-orders")) || [];
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        const updatedStatus = !isChecked ? "delivered" : "in-progress";
        order.status = updatedStatus;
      }
      return order;
    });

    localStorage.setItem("all-orders", JSON.stringify(updatedOrders));
    setIsChecked((prevStatus) => {
      const newStatus = prevStatus;
      console.log("newStatus: ", newStatus);
      navigate("/UserOrders", {
        state: { isChecked: newStatus },
      });

      return newStatus;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileInView={{ scale: 1.05 }}
      className="motion-div-dash-item"
    >
      <div className="order-dash-item">
        <ul>
          <li>
            <img src={img} alt={`order-${id}`} />
          </li>
          <li>{id}</li>
          <li>{name}</li>
          <li>{categor}</li>
          <li>{date}</li>
          <li>${total}</li>
          <li>{status}</li>
          <li>
            <Form>
              <Form.Check
                type="checkbox"
                label={isChecked ? "delivered" : "in progress"}
                className="order-checkbox"
                checked={isChecked}
                onChange={handleCheckBoxChange}
              />
            </Form>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
