import "./ExploreCollectionItem.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function ExploreCollectionItem({ img, title }) {
    return (
        <>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div2'
            >
                <Link to="/Collection" state={{ selectedCategory: `${title}` }}>
                    <div className="collection-item">
                        <div className="collection-layer"></div>
                        <div className="img-div-collection"><img src={img} alt={title} /></div>
                        <h3>{title}</h3>
                    </div>
                </Link>
            </motion.div>

        </>
    );
}