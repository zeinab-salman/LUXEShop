import MenuComponent from "../../../components/MenuComponent/MenuComponent";
import Title from "../../../components/Title/Title";
import StatisticSection from "../../../components/StatisticSection/StatisticSection";
import ChartComponent from "../../../components/ChartComponent/ChartComponent"
import "./HomeDashboard.css"
import RecentOrderSection from "../../../components/RecentOrdersSection/RecentOrderSection";
export default function HomeDashboard() {
  return (
    <>
      <section className="home-dashboard-section">

        <Title title="Welcome back to LUXESHOP admin   " type="sections-description" line="line-sec" className=" title-dash" />
        <MenuComponent />
        <StatisticSection />
        <ChartComponent />
        <RecentOrderSection />
      </section>
    </>
  );
}
