import "./AddProductModal.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import toast from "react-hot-toast";

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        img: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setFormData({
                ...formData,
                img: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.name || !formData.category || !formData.price) {
            toast.error("Please fill in all required fields");
            return;
        }
        onAdd({
            ...formData,
            price: Number(formData.price),
            date: new Date().toISOString().split("T")[0],
            id: Date.now()
        });

        toast.success("Product added successfully");
        setFormData({ name: "", category: "", price: "", img: "" });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.section
                    key="add-product-modal"
                    className="wallet-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        key="add-product-inner"
                        className="add-container flex-center glass-effect"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                    >
                        <form className="add-form" onSubmit={handleSubmit}>
                            <IoCloseSharp onClick={onClose} className="close-icon" />

                            <h3>Add New Product</h3>

                            {formData.img && (
                                <img src={formData.img} alt="product" className="add-img" />
                            )}

                            <FormInput type="file" onChange={handleImgChange} />

                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <FormInput
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={formData.category}
                                onChange={handleChange}
                            />

                            <FormInput
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                            />

                            <Button text="Add Product" type="submit" />
                        </form>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default AddProductModal;
