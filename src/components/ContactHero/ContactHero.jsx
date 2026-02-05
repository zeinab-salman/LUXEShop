import "./ContactHero.css";
import { motion } from "framer-motion";
import Title from "../Title/Title";
import TypeWriterText from "../TypeWriterText/TypeWriterText";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function ContactHero() {
  return (
    <>
      <section className="hero-contact  ">
        <div className="layer-contact "></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ scale: 1.05 }}
          className=""
        >
          <div className="flex-center hero-div1">
            <Title title="Contact" span="Us" text="" />
            <TypeWriterText
              text="ًWe're Here to Help You Shop With Confidence.Questions about an order or a product? Our team is ready to assist you. "
              type="text1"
            />
          </div>
        </motion.div>
        <Link to={"/About Us"} className="btn-hero">
          <Button text="About Us" type="hero-btn" />
        </Link>
      </section>
    </>
  );
}
