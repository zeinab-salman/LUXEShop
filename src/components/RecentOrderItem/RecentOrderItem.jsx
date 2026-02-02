import "./RecentOrderItem.css"
import { motion } from "framer-motion";

export default function RecentOrderItem({ id, name, categor, date, total, img }) {


    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div-recent-item'
            >
                <div className="recent-order-item">
                    <ul>
                        <li><img src={img} /></li>
                        <li>{id}  </li>
                        <li>{name}</li>
                        <li>{categor}</li>
                        <li>{date}</li>
                        <li>${total}</li>
                    </ul>
                </div>
            </motion.div>

        </>
    );
}