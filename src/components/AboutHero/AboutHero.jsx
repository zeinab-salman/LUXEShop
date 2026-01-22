import "./AboutHero.css"
import { motion } from "framer-motion";
import Title from "../Title/Title";
import TypeWriterText from "../TypeWriterText/TypeWriterText";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function AboutHero() {
    return (
        <>
              <section className="hero-about  ">
                    <div className="layer-about "></div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileInView={{ scale: 1.05 }}
                      className=''
                    >
                      <div className="flex-center hero-div1">
            
            
                        <Title title="About"
                          span="Us"
                          text=""
                        />
                        <TypeWriterText text=" More than a brand, we are a curated experience for those who appreciate the finer things in life. Welcome to our world. " type="text1" />
                      </div>
                           </motion.div>
                    <Link to={'/Products'} className="btn-hero"><Button text="products" type="hero-btn" /></Link>
                  </section>
             
                   
        </>
    );
}
