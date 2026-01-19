import "./Hero.css"
import img1 from "../../../public/images/d1.jpg"
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import Title from "../Title/Title";
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <>
      <section className="hero ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ scale: 1.05 }}
          className=''
        >
          <div className="flex-center hero-div1">
            <div className="left-hero ">

              <Title title=" Welcome To My Online Shop ZSHOP  "
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus ad, optio dolorum est velit nisi! Nesciunt exercitationem nam soluta unde consequuntur ratione, sunt quo quis fuga vero, voluptate hic!  "
              />
            </div>
            <div className="right-hero">
              <img src={img1} alt="hero-img" />
            </div> </div>
        </motion.div>
        <Link to={'/Products'} ><Button text="products" type="hero-btn" /></Link>
      </section>
    </>
  );
}
