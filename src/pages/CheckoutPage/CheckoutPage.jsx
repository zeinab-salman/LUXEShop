import "./CheckoutPage.css"
import React from 'react';
import { useState } from "react";
import { useCart } from '../UserCart/CartProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import FormInput from "../../components/FormInput/FormInput";
import { GrClose } from "react-icons/gr";

export default function CheckoutPage() {
  const { pendingCheckout } = useCart();

  const navigate = useNavigate();
  const handleFinalClick = (e) => {
    e.preventDefault();
    const isFormComplete= formData && Object.values(formData).every(value=> value.trim() !=="");
    if (!isFormComplete){alert("please fill form"); return;}
    confirmFinalOrder();
    navigate('/UserOrders');
  }
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    city: '',
    ZIPCode: ''
  });
  const handleChange = (e) => {
    const { name, value } =
      e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("done", formData);
    alert(`${formData.username}`);
    if (!formData.email || !formData.username || !formData.address || !formData.city || !formData.ZIPCode) {
      alert("please fill all fields")

    }
  };


  const { confirmFinalOrder } = useCart();
  const { cartItems, totalPrice ,removeFromCheckout } = useCart();
  if (pendingCheckout.length === 0) {
    return (
      <section className="cart-container empty-cart">
        <h2 className="no-list-text">Your Checkout list is empty 🛒</h2>
        <Link to="/"><Button text="Go Back to Shopping" type="hero-btn" /></Link>
      </section>
    );
  }

  return (
    <section className="cart-container-check " >
      <Title
        title="Check Out"
        line="line"
      />
      <div className=" cart-info2">
        <form className="check-form" onSubmit={handleSubmit}>
          <h3 className="contact-text ">Shipping Information</h3>
          <FormInput
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.username}

          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <FormInput
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={formData.address}

          />
          <FormInput
            type="text"
            name="city"
            placeholder="City Country"
            onChange={handleChange}
            value={formData.city}

          />
          <FormInput
            type="text"
            name="ZIPCode"
            placeholder="ZIP Code"
            onChange={handleChange}
            value={formData.ZIPCode}
          />
          <div className="flex-center btns-check ">
            <Button
              text="Continue to payment "
              type="hero-btn"
              onClick={handleFinalClick}
            />
          

          </div>
        </form>

        <div className=" details-cart-check">
          <h2>Order Summary</h2>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <div className="cart-items">
            {pendingCheckout.map((item) => (
              <div key={item.id} className="product-cart-check" >
                <img src={item.img} alt={item.name} />
                <div className="cart-right-check">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => removeFromCheckout(item.id)} className="remove-btn">
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




