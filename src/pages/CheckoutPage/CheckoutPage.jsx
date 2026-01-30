import "./CheckoutPage.css";
import React, { useState } from "react";
import { useCart } from "../UserCart/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import toast from "react-hot-toast";
import { useWallet } from "../../components/WalletModel/WalletProvider";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { rewardOrder } = useWallet();

  const {
    pendingCheckout,
    totalPrice,
    removeFromCheckout,
    confirmFinalOrder,
  } = useCart();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    city: "",
    ZIPCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormComplete = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormComplete) {
      toast.error("Please fill all fields",{
        duration: 4000,
        position: 'top-center',
        removeDelay: 1000,
        toasterId: 'default',
        className: 'toaster',
      });
      return;
    }

    const orderInfo = JSON.parse(localStorage.getItem("orderInfo")) || [];

    const newOrderInfo = {
      id: Date.now(),
      username: formData.username,
      email: formData.email.trim(),
      address: formData.address,
      city: formData.city,
      ZIPCode: formData.ZIPCode,
    };

    orderInfo.push(newOrderInfo);
    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

    confirmFinalOrder();
    rewardOrder();

    toast.success("Order placed successfully!",{
        duration: 4000,
        position: 'top-center',
        removeDelay: 1000,
        toasterId: 'default',
        className: 'toaster',

    });
    navigate("/UserOrders");
  };

  if (pendingCheckout.length === 0) {
    return (
      <section className="cart-container empty-cart">
        <h2 className="no-list-text">Your Checkout list is empty 🛒</h2>
        <Link to="/">
          <Button text="Go Back to Shopping" type="hero-btn" />
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-container-check">
      <Title title="Check Out" line="line" />

      <div className="cart-info2">
        <form className="check-form" onSubmit={handleSubmit}>
          <h3 className="contact-text">Shipping Information</h3>
          <FormInput
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="city"
            placeholder="City Country"
            value={formData.city}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="ZIPCode"
            placeholder="ZIP Code"
            value={formData.ZIPCode}
            onChange={handleChange}
          />

          <div className="flex-center btns-check">
            <Button text="Continue to payment" type="hero-btn" />
          </div>
        </form>

        {/* ORDER SUMMARY */}
        <div className="details-cart-check">
          <h2>Order Summary</h2>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>

          <div className="cart-items">
            {pendingCheckout.map((item) => (
              <div key={item.id} className="product-cart-check">
                <img src={item.img} alt={item.name} />

                <div className="cart-right-check">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCheckout(item.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



