import "./OrdersDashboard.css";
import OrderDashboardItem from "../../../components/OrderDashboardItem/OrderDashboardItem";
import Title from "../../../components/Title/Title";
import MenuComponent from "../../../components/MenuComponent/MenuComponent";
import { useState, useEffect, useCallback } from "react";

export default function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    try {
      const storedData =
        JSON.parse(localStorage.getItem("all-orders")) || [];
      const completedData =
        JSON.parse(localStorage.getItem("completed-orders")) || [];

      if (Array.isArray(storedData)) {
        setOrders(storedData);
      }

      if (Array.isArray(completedData)) {
        setCompletedOrders(completedData);
      }
    } catch (error) {
      console.error("Error reading orders:", error);
    }
  }, []);

  const handleOrderCompleted = useCallback(
    (orderId) => {
      const orderToComplete = orders.find(
        (order) => order.userId.id === orderId
      );

      if (!orderToComplete) return;

      const updatedOrders = orders.filter(
        (order) => order.userId.id !== orderId
      );

      const updatedCompletedOrders = [
        ...completedOrders,
        {
          ...orderToComplete,
          userId: {
            ...orderToComplete.userId,
            status: "done",
          },
        },
      ];

      localStorage.setItem(
        "all-orders",
        JSON.stringify(updatedOrders)
      );
      localStorage.setItem(
        "completed-orders",
        JSON.stringify(updatedCompletedOrders)
      );

      setOrders(updatedOrders);
      setCompletedOrders(updatedCompletedOrders);

      setNotification(`Order #${orderId} has been marked as delivered.`);
      setTimeout(() => setNotification(""), 3000);
    },
    [orders, completedOrders]
  );

  return (
    <section className="orders-dash-section flex-center">
      <MenuComponent />

      <Title
        title="Your Orders"
        line="line-sec"
        type="sections-description"
        type2="title-dash2"
      />

      {notification && (
        <div className="notification">{notification}</div>
      )}

      {orders.length > 0 ? (
        orders.map((order, index) => {
          const { userId = {} } = order;
          const { id = "No ID", items = [] } = userId;
          const firstItem = items[0] || {};
          const {
            name = "Unknown",
            category = "N/A",
            img = "placeholder.png",
          } = firstItem;

          return (
            <OrderDashboardItem
              key={id || index}
              id={id}
              date={userId.date || "No Date"}
              total={userId.total || 0}
              name={name}
              categor={category}
              img={img}
              status={userId.status || "no"}
              onOrderCompleted={() => handleOrderCompleted(id)}
            />
          );
        })
      ) : (
        <p>No orders available.</p>
      )}
    </section>
  );
}
