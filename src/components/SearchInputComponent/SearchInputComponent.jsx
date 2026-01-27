import "./SearchInputComponent.css"
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
export default function SearchInputComponent({ searchTerm, setSearchTerm, placeholder }) {


    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileInView={{ scale: 1.05 }}
                className='motion-div-search'
            >
                <div className="search-div">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </motion.div>

        </>
    );
}