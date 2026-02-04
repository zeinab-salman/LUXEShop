import "./UserOrder.css";
import { useCart } from '../UserCart/CartProvider';
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchInputComponent from "../../../components/SearchInputComponent/SearchInputComponent";

export default function UserOrder() {
  const { orders } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [allOrders, setAllOrders] = useState([]);

  // تصفية الطلبات حسب البحث
  const filteredOrders = orders.filter(order =>
    order.id.toString().includes(searchTerm) ||
    order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // جلب كل الطلبات من localStorage عند التحميل
  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("all-orders")) || [];
      setAllOrders(storedData);
    } catch (error) {
      console.error("Error reading orders:", error);
    }
  }, []);
  return (
    <section className="orders-section flex-center">
      <Title title="My Orders" line="line-sec" type="sections-descriptions" />
      <SearchInputComponent
        placeholder="Search by Order ID or Product name..."
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="orders-carts flex-center empty-orders">
        {filteredOrders.length === 0 ? (
          <p className="not-found-text">No orders found.</p>
        ) : (
          filteredOrders.map(order => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ scale: 1.05 }}
              className="motion-div-search"
            >
              <div className="order-cart">
                <div className="order-id">
                  <h3>Order #{order.id}</h3>
                  <h3>{order.status}</h3>
                </div>
                <div className="total">
                  <p>Total: ${order.total}</p>
                </div>
                <ul className="order-details">
                  {order.items.map(item => (
                    <li key={item.id}>
                      <img src={item.img} alt={item.name} className="order-img" />
                      {item.name} - Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
