import "./UserCart.css"
import React from 'react';
import { useCart } from './CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import { GrClose } from "react-icons/gr";
export default function UserCart() {
  const {prepareForCheckout}= useCart();
  const {goToCheckout}=useCart();
  const navigate =useNavigate();
  const handleStepOne =()=>{
    goToCheckout();
    navigate('/CheckoutPage')
  }
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  if (cartItems.length === 0) {
    return (
      <section className="cart-container empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/"><Button text="Go Back to Shopping" type="hero-btn" /></Link>
      </section>
    );
  }

  return (
    <section className="cart-container " >
      <Title
        title="Shopping Cart"
        line="line"
      />
      <div className=" cart-info">
        <div className="cart-items">

          {cartItems.map((item) => (
            <div key={item.id} className="product-cart" >
              <img src={item.img} alt={item.name}  />
              <div className="cart-right">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            
              <div className="quantity-selector">
                <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn">−</button>
                <span className="qty-number"> {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn">+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
        </div>

        <div className=" details-cart">
          <h2>Order Summary</h2>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <Button
            text="Proceed to Checkout "
            type="hero-btn"
            onClick={handleStepOne}
          />
        </div>
      </div>
    </section>
  );
};




