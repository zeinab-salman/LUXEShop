import ShopFeatureComponent from "../ShopFeatureComponent/ShopFeatureComponent.jsx";
import "./ShopFeaturesSection.css"
import { FaCarAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
export default function ShopFeaturesSection({ }) {

    return (
        <>
           <section className="flex-center Shop-features">
            
           <ShopFeatureComponent
           title="Free Shipping"
           text="On all orders over $100"
           icon={FaCarAlt}
           
           />
             <ShopFeatureComponent
           title=" Secure Payment  "
           text="100% secure transactions "
           icon={MdHealthAndSafety}
           
           />
            <ShopFeatureComponent
           title=" Easy Returns "
           text="30-day return policy "
           icon={FaArrowRotateRight}
           
           />
           
           <ShopFeatureComponent
           title="24/7 Support "
           text="Dedicated customer service"
           icon={ FaMusic}
           
           />

           </section>
               
        </>
    );
}