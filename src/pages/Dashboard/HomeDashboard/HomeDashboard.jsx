import MenuComponent from "../../../components/Shared/MenuComponent/MenuComponent";
import Title from "../../../components/Ui/Title/Title";
import StatisticSection from "../../../components/Sections/StatisticSection/StatisticSection";
import ChartComponent from "../../../components/Ui/ChartComponent/ChartComponent";
import "./HomeDashboard.css";
import RecentOrderSection from "../../../components/Sections/RecentOrdersSection/RecentOrderSection";
export default function HomeDashboard() {
  return (
    <>
      <section className="home-dashboard-section">
        <Title
          title="Welcome back to LUXESHOP admin "
          type="sections-description"
          line="line-sec"
          className=" title-dash"
        />
        <MenuComponent />
        <StatisticSection />
        <ChartComponent />
        <RecentOrderSection />
      </section>
    </>
  );
}
