import "./StatisticSection.css";
import StatisticComponent from "../StatisticComponent/StatisticComponent";
import { useMemo } from "react";
import { CalculateStatistic } from "../StatisticComponent/CalculateStatistic";

export default function StatisticSection() {
  // جلب الطلبات من localStorage
  const StoredOrders = useMemo(() => {
    try {
      const orders = JSON.parse(localStorage.getItem("all-orders"));
      return Array.isArray(orders) ? orders : [];
    } catch {
      return [];
    }
  }, []);

  // جلب المستخدمين من localStorage
  const StoredUsers = useMemo(() => {
    try {
      const users = JSON.parse(localStorage.getItem("all-users"));
      return Array.isArray(users) ? users : [];
    } catch {
      return [];
    }
  }, []);

  console.log("StoredUsers:", StoredUsers);

  // إضافة تاريخ افتراضي لكل مستخدم إن لزم
  const usersWithDate = StoredUsers.map((user) => ({
    ...user,
    date: user.date || new Date().toISOString(),
  }));

  // إحصائيات الإيرادات
  const revenueStats = useMemo(
    () => CalculateStatistic(StoredOrders, "total"),
    [StoredOrders],
  );

  // إحصائيات الطلبات
  const ordersStats = useMemo(
    () => CalculateStatistic(StoredOrders),
    [StoredOrders],
  );

  // إحصائيات المستخدمين
  const usersStats = useMemo(
    () => CalculateStatistic(usersWithDate),
    [usersWithDate],
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
