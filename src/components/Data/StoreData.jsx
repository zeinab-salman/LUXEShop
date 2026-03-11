import { createContext, useState, useContext, useEffect, useMemo } from "react";
export const StoreContext = createContext();
export const StoreData = ({ children }) => {
  const [allCarts, setAllCarts] = useState(
    () => JSON.parse(localStorage.getItem("carts")) || [],
  );
  const [allOrders, setAllOrders] = useState(
    () => JSON.parse(localStorage.getItem("orders")) || [],
  );
  const [allUsers, setAllUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  const [allWallets, setAllWallets] = useState(
    () => JSON.parse(localStorage.getItem("wallets")) || [],
  );
  const storeUsers = (userData) => {
    let allUsers = JSON.parse(localStorage.getItem("all-users")) || [];
    const existingIndex = allUsers.findIndex((u) => u.email === userData.email);

    if (existingIndex !== -1) {
      allUsers[existingIndex] = userData;
    } else {
      allUsers.push(userData);
    }
    localStorage.setItem("all-users", JSON.stringify(allUsers));
    setAllUsers(allUsers);
  };
  const storeOrders = (userId, ordersData) => {
    let allOrders = JSON.parse(localStorage.getItem("all-orders")) || [];
    allOrders.push({ userId, orders: ordersData });
    localStorage.setItem("all-orders", JSON.stringify(allOrders));
    setAllOrders(allOrders);
  };
  const storeData = (userId, cartData) => {
    let allCarts = JSON.parse(localStorage.getItem("all-carts")) || [];
    allCarts.push({ userId, cart: cartData });
    localStorage.setItem("all-carts", JSON.stringify(allCarts));
    setAllCarts(allCarts);
  };
  const storeWallet = (userId, walletData) => {
    let allWallets = JSON.parse(localStorage.getItem("all-wallets")) || [];
    allWallets.push({ userId, wallet: walletData });
    localStorage.setItem("all-wallets", JSON.stringify(allWallets));
    setAllWallets(allWallets);
  };

  // UseEffect to load data into local state when the component mounts
  useEffect(() => {
    setAllCarts(JSON.parse(localStorage.getItem("all-carts")) || []);
    setAllOrders(JSON.parse(localStorage.getItem("all-orders")) || []);
    setAllUsers(JSON.parse(localStorage.getItem("all-users")) || []);
    setAllWallets(JSON.parse(localStorage.getItem("all-wallets")) || []);
  }, []);

  // Context value with all data and functions
  const value = useMemo(
    () => ({
      storeData,
      storeOrders,
      storeUsers,
      storeWallet,
      allCarts,
      allOrders,
      allUsers,
      allWallets,
    }),
    [allCarts, allOrders, allUsers, allWallets],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
