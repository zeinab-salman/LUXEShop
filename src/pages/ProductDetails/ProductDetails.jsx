import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import { ProductsData } from "../../components/Data/ProductsData";
import Button from "../../components/Button/Button";
import React, { useState } from 'react';
import img1 from "../../../public/images/d1.jpg"
import img2 from "../../../public/images/d2.jpg"
import img3 from "../../../public/images/d3.jpg"
import img4 from "../../../public/images/d4.jpg"
import img5 from "../../../public/images/d5.jpg"
import { main } from "framer-motion/client";
export default function ProductDetails() {
  const { id } = useParams();
  const product = ProductsData.find(p => p.id === Number(id));
  if (!product) return <h2 id="not-found">Product Not Found </h2>;
  const images = [
    product.img, img1, img2, img3, img4, img5
  ];
  const [mainImg, setMainImg] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('light-blue');


  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <>
      <section className="product-container">

        <div className="image-gallery">
          <div className="main-img-container">
            <img src={mainImg} alt="Product" className="main-img" />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`thumb-img ${mainImg === img ? 'active' : ''}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <span className="product-category">SHIRTS</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="description">Premium Egyptian cotton oxford shirt with mother-of-pearl buttons.</p>
          <div className="selector-group">
            <span className="selector-label">COLOR</span>
            <div className="color-options">
              <div
                className={`color-dot ${selectedColor === 'light-blue' ? 'active' : ''}`}
                style={{ backgroundColor: '#add8e6' }}
                onClick={() => setSelectedColor('light-blue')}
              ></div>
              <div
                className={`color-dot ${selectedColor === 'pink' ? 'active' : ''}`}
                style={{ backgroundColor: '#ffb6c1' }}
                onClick={() => setSelectedColor('pink')}
              ></div>
            </div>
          </div>
          <div className="selector-group">
            <span className="selector-label">SIZE</span>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

          </div>

          <div className="selector-group">
            <span className="selector-label">QUANTITY</span>
            <div className="quantity-selector">
              <button onClick={decrement} className="qty-btn">−</button>
              <span className="qty-number">{quantity}</span>
              <button onClick={increment} className="qty-btn">+</button>
            </div>
          </div>

          <Button text={`Add to Cart —${product.price} `}
            type="details-btn"
          />
        </div>
      </section>
    </>
  );
}
