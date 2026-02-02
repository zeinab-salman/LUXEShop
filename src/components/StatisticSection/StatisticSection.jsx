import "./StatisticSection.css";
import StatisticComponent from "../StatisticComponent/StatisticComponent";
import { useMemo } from "react";
import { CalculateStatistic } from "../StatisticComponent/CalculateStatistic";

export default function StatisticSection() {

  const StoredOrders = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("all-orders")) || [];
    } catch {
      return [];
    }
  }, []);

  const StoredUsers = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("all-users")) || [];

    } catch {
      return [];
    }
  }, []);
  console.log(StoredUsers);


  const usersWithDate = StoredUsers.map(user => ({
    ...user,
    date: new Date().toISOString()
  }));




  const revenueStats = useMemo(
    () => CalculateStatistic(StoredOrders, "total"),
    [StoredOrders]
  );


  const ordersStats = useMemo(
    () => CalculateStatistic(StoredOrders),
    [StoredOrders]
  );


  const usersStats = useMemo(
    () => CalculateStatistic(usersWithDate),
    [StoredUsers]
  );

  return (
    <section className="stat-section flex-center">
      <StatisticComponent
        title="Total Revenue"
        total={`$${revenueStats.total.toLocaleString()}`}
        stat={`${revenueStats.percentage >= 0 ? "+" : "-"}${revenueStats.percentage}% from last month`}
        trend={revenueStats.percentage >= 0 ? "up" : "down"}
      />

      <StatisticComponent
        title="New Orders"
        total={ordersStats.total.toLocaleString()}
        stat={`${ordersStats.percentage >= 0 ? "+" : "-"}${ordersStats.percentage}% from last month`}
        trend={ordersStats.percentage >= 0 ? "up" : "down"}
      />

      <StatisticComponent
        title="New Users"
        total={usersStats.total.toLocaleString()}
        stat={`${usersStats.percentage >= 0 ? "+" : "-"}${usersStats.percentage}% from last month`}
        trend={usersStats.percentage >= 0 ? "up" : "down"}
      />
    </section>
  );
}