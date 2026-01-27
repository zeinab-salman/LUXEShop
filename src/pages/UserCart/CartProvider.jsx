import React, { createContext, useState, useContext, useEffect } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('myCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const isExist = prev.find(item => item.id === product.id);

      if (isExist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });
    console.log(product);

  };
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const updateQuantity = (id, amount) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
const [orders, setOrders] = useState([]);
const checkout = () => {
  if (cartItems.length > 0) {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toLocaleDateString()
    };
    setOrders([...orders, newOrder]);
    setCartItems([]); 
  }
};

const cancelOrder = (orderId) => {
  setOrders(orders.filter(order => order.id !== orderId));
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalPrice , orders ,checkout , cancelOrder}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);