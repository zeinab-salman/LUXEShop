import "./Hero.css"
import img1 from "../../../public/images/herobg2.jpg"
import {Link} from "react-router-dom"
import Button from "../Button/Button";
import Title from "../Title/Title";
export default function Hero() {
  return (
    <>
    <section className="hero ">
      <div className="flex-center hero-div1">
      <div className="left-hero">
    
     <Title title=" Welcome To My Online Shop ZSHOP  "
     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus ad, optio dolorum est velit nisi! Nesciunt exercitationem nam soluta unde consequuntur ratione, sunt quo quis fuga vero, voluptate hic!  "
     />
     </div>
     <div className="right-hero">
      <img src={img1} alt="hero-img"/>
     </div> </div>
    <Link to={'/Products'} ><Button text="products" type="hero-btn"/></Link>
     </section>
    </>
  );
}
