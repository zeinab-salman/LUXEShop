import "./Hero.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import Title from "../Title/Title";
import { motion } from 'framer-motion'
import TypeWriterText from "../TypeWriterText/TypeWriterText";
export default function Hero() {
  return (
    <>
      <section className="hero ">
        <div className="layer"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ scale: 1.05 }}
          className=''
        >
          <div className="flex-center hero-div1">
            <Title title="Elevate Your "
              span="Style"
              text=""
            />
            <TypeWriterText text="Discover our curated collection of timeless pieces crafted with unparalleled attention to detail and quality.  " type="text1" />
          </div>
        </motion.div>
        <Link to={'/Products'} className="btn-hero"><Button text="products" type="hero-btn" /></Link>
      </section>
    </>
  );
}






