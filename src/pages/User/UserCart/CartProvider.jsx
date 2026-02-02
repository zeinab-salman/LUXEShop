import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from '../../../components/NavBar/AuthProvider';
import { useStore } from '../../../components/Data/StoreData';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id;
const { storeOrders } = useStore();
  const [cartItems, setCartItems] = useState([]);
  const [pendingCheckout, setPendingCheckout] = useState([]);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    if (!userId) return;

    const savedCart = localStorage.getItem(`cart_${userId}`);
    const savedOrders = localStorage.getItem(`orders_${userId}`);

    setCartItems(savedCart ? JSON.parse(savedCart) : []);
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    setPendingCheckout([]);
  }, [userId]);

  
  useEffect(() => {
    if (!userId) return;
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  
  useEffect(() => {
    if (!userId) return;
    localStorage.setItem(`orders_${userId}`, JSON.stringify(orders));
  }, [orders, userId]);


  const addToCart = (product) => {
    if (!userId) {
      alert("  please  ");
      return;
    }

    setCartItems(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id, amount) => setCartItems(prev => prev.map(
    item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
  ));
  const prepareForCheckout = () => setPendingCheckout([...cartItems]);

  const confirmFinalOrder = () => {
    if (!pendingCheckout.length) return;

    const newOrder = {
      id: Date.now(),
      items: pendingCheckout,
      total: pendingCheckout.reduce((acc, i) => acc + i.price * i.quantity, 0),
      date: new Date().toLocaleDateString()
    };
 storeOrders(newOrder);
    setOrders(prev => [...prev, newOrder]);
    setCartItems([]);
    setPendingCheckout([]);
    
  };

  const cancelOrder = (orderId) => setOrders(prev => prev.filter(o => o.id !== orderId));
  const totalPrice = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      prepareForCheckout,
      pendingCheckout,
      confirmFinalOrder,
      orders,
      cancelOrder,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
