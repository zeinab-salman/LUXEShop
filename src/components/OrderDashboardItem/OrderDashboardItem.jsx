import React, { useState } from "react";
import "./OrderDashboardItem.css";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";

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

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;

      if (newChecked) {
        onOrderCompleted(id);
        console.log(`Order #${id} has been marked as delivered.`);
      }

      return newChecked;
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
                label="Order delivered"
                className="order-checkbox"
                checked={isChecked || status === "done"}
                onChange={handleCheckboxChange}
              />
            </Form>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
