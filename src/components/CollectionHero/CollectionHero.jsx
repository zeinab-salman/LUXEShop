import "./CollectionHero.css"
import { motion } from "framer-motion";
import Title from "../Title/Title";
import TypeWriterText from "../TypeWriterText/TypeWriterText";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function CollectionHero() {
  return (
    <>
      <section className="hero-collection  ">
        <div className="layer-collection "></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ scale: 1.05 }}
          className=''
        >
          <div className="flex-center hero-div1">
            <Title title="Our"
              span=" Collections"
              text=""
            />
            <TypeWriterText text=" Discover Timeless pieces , Explore Our Collections, Collections for you, Elevate your everyday style." type="text1" />
          </div>
        </motion.div>
        <Link to={'/Products'} className="btn-hero"><Button text="Products" type="hero-btn" /></Link>
      </section>
    </>
  );
}
