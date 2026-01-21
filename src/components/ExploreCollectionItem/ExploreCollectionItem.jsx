import "./ExploreCollectionItem.css"
import { motion } from "framer-motion";
export default function ExploreCollectionItem({ img, title }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div'
            >
                <div className="collection-item">
                    <div className="collection-layer"></div>
                    <img src={img} alt={title} />
                    <h3>{title}</h3>
                </div>
            </motion.div>
        </>
    );
}