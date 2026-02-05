import "./AboutUsItem.css";
import { motion } from "framer-motion";
export default function AboutUsItem({ title, icon: Icon }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ scale: 1.05 }}
        className="motion-div"
      >
        <div className="about-us-item">
          <div className="circle-icon-us">
            <Icon />
          </div>
          <h3>{title}</h3>
        </div>
      </motion.div>
    </>
  );
}
