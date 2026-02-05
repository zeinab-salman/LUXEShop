import React, { useMemo } from "react";
import "./ChartComponent.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Title from "../Title/Title";

export default function ChartComponent() {
  const StoredOrders = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("all-orders")) || [];
    } catch {
      return [];
    }
  }, []);

  if (!StoredOrders || StoredOrders.length === 0) {
    return <p>No data available</p>;
  }

  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const chartData = StoredOrders.reduce((acc, order) => {
    const user = order.userId || {};
    const dayOfWeek = user.date ? getDayOfWeek(user.date) : "N/A";
    const total = Number(user.total) || 0;

    if (dayOfWeek !== "N/A") {
      const existingDay = acc.find((item) => item.day === dayOfWeek);
      if (existingDay) {
        existingDay.total += total;
      } else {
        acc.push({ day: dayOfWeek, total });
      }
    }
    return acc;
  }, []);

  const allZero = chartData.every((item) => item.total === 0);
  if (allZero) return <p>No non-zero data available</p>;

  const sortedData = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].map(
    (day) => chartData.find((item) => item.day === day) || { day, total: 0 },
  );

  return (
    <section
      className="line-section flex-center"
      style={{ width: "100%", overflowX: "auto" }}
    >
      <Title
        title="Sales Overview: Weekly sales comparison"
        line="line-sec"
        type="sections-description"
      />
      <BarChart
        width={900}
        height={300}
        data={sortedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip formatter={(value) => [`${value}`, "Total"]} />
        <Bar dataKey="total" fill="var(--logo-color)" />
      </BarChart>
    </section>
  );
}
