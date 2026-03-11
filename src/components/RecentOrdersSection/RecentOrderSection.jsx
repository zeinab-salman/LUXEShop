import "./RecentOrderSection.css";
import RecentOrderItem from "../RecentOrderItem/RecentOrderItem";
import { useMemo } from "react";
import Title from "../Title/Title";
export default function RecentOrderSection() {
  const recentOrders = useMemo(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("all-orders")) || [];

      if (!Array.isArray(storedData)) return [];

      return [...storedData]

        .filter((order) => order && order.userId)
        .sort((a, b) => new Date(b.userId.date) - new Date(a.userId.date))
        .slice(0, 5);
    } catch (error) {
      console.error("Error reading orders:", error);
      return [];
    }
  }, []);

  return (
    <section className="recent-orders-section flex-center">
      <Title
        title=" Recent Orders"
        line="line-sec"
        type="sections-description"
      />
      {recentOrders.length > 0 ? (
        recentOrders.map((order, index) => {
          const data = order.userId;
          const firstItem = data.items && data.items[0];

          return (
            <RecentOrderItem
              key={data.id || index}
              id={data.id}
              date={data.date}
              total={data.total}
              name={firstItem?.name || "unKnown"}
              categor={firstItem?.category || firstItem?.categor || "year"}
              img={firstItem?.img || "placeholder.png"}
            />
          );
        })
      ) : (
        <p>There is no orders</p>
      )}
    </section>
  );
}
