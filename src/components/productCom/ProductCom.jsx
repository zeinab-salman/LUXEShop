import Button from "../Button/Button";
import "./ProductCom.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ProductCom({ id, img, name, price }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div'
            >
                <Link to={`/Products/${id}`} className="Link">
                    <div className="product-item"   >
                        <div className="img-div">
                            <img src={img} alt="photo" />
                        </div>
                        <div className="content-div">
                            <h3>{name}</h3>
                            <p>${price}</p>
                            
                                <Button text="Details" type="product-item-btn" />
                            
                        </div>
                    </div>
                </Link>
            </motion.div >

        </>
    );
}
