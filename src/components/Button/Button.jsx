import "./Button.css"
import { motion } from "framer-motion";
export default function Button({ text, type, onClick }) {


    return (
        <>
            


            <motion.div
                initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
               whileTap={{ scale: 1.1 }}
                className=''
           >
            <button className={` ${type}`} onClick={onClick}>{text}</button>
           </motion.div>
        </>
    );
}

 

 