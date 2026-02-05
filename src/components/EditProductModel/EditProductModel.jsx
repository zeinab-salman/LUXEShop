import "./EditProductModel.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import toast from "react-hot-toast";
const EditProductModel = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    categor: "",
    prise: "",
    img: "",
  });
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        categor: product.categor,
        prise: product.price,
        img: product.img,
      });
    }
  }, [product]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImgChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, img: URL.createObjectURL(e.target.files[0]) });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product) return;
    onSave(product.id, formData);
    toast.success("Product updated successfully");
    onClose();
  };
  return (
    <AnimatePresence>
      {" "}
      {isOpen && product && (
        <motion.section
          key="edit-product-modal"
          className="wallet-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            key="edit-product-inner"
            className="edit-container flex-center glass-effect"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <form className="edit-form" onSubmit={handleSubmit}>
              <IoCloseSharp onClick={onClose} className="close-icon" />
              <h3>Edit Product</h3>
              {formData.img && (
                <img src={formData.img} alt="product" className="edit-img" />
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
                name="categor"
                placeholder="Category"
                value={formData.categor}
                onChange={handleChange}
              />
              <FormInput
                type="number"
                name="prise"
                placeholder="Price"
                value={formData.prise}
                onChange={handleChange}
              />
              <Button text="Save Changes" type="submit" />
            </form>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
export default EditProductModel;
