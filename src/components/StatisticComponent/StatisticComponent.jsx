import "./StatisticComponent.css";
import { motion } from "framer-motion";
export default function StatisticComponent({ title, total, stat }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ scale: 1.05 }}
        className="stat-card"
      >
        <h2 className="title-stat "> {title}</h2>
        <p>{total}</p>
        <p>{stat} </p>
      </motion.div>
    </>
  );
}
