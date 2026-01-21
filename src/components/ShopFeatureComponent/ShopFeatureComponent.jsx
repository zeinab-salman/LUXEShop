import "./ShopFeatureComponent.css"
import { motion } from "framer-motion";
export default function ShopFeatureComponent({ title, text, icon: Icon }) {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div'
            >
                <div className="feature-div">
                    <div className="icon-div"> <Icon size={24} /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </motion.div>

        </>
    );
}