import "./ProductItemDashboard.css";
import { motion } from "framer-motion";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import EditProductModel from "../EditProductModel/EditProductModel";

export default function ProductItemDashboard({
  img,
  name,
  categor,
  date,
  prise,
  id,
  deleteProduct,
  editProductFromParent,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditClick = () => {
    setSelectedProduct({ id, img, name, categor, date, prise });
    setIsModalOpen(true);
  };

  const handleSave = (id, updatedData) => {
    editProductFromParent(id, updatedData);
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ scale: 1.05 }}
        className="motion-div-recent-item"
      >
        <div className="product-dashboard-item">
          <ul>
            <li>
              <img src={img} alt="product" />
            </li>
            <li>{name}</li>
            <li>{categor}</li>
            <li>{date}</li>
            <li>${prise}</li>
            <li>
              <FaEdit className="product-dash-icon" onClick={handleEditClick} />
            </li>
            <li>
              <MdDelete
                className="product-dash-icon"
                onClick={() => deleteProduct(id)}
              />
            </li>
          </ul>
        </div>
      </motion.div>

      {isModalOpen && selectedProduct && (
        <EditProductModel
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onSave={handleSave}
        />
      )}
    </>
  );
}
