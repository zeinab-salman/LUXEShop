import { createContext, useState, useContext, useEffect, useMemo } from 'react';

export const StoreContext = createContext();

export const StoreData = ({ children }) => {
  const [allCarts, setAllCarts] = useState(() => JSON.parse(localStorage.getItem("carts")) || []);
  const [allOrders, setAllOrders] = useState(() => JSON.parse(localStorage.getItem("orders")) || []);
  const [allUsers, setAllUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);
  const [allWallets, setAllWallets] = useState(() => JSON.parse(localStorage.getItem("wallets")) || []);

  // دالة لتخزين بيانات المستخدمين
  //const storeUsers = (userData) => {
   // let allUsers = JSON.parse(localStorage.getItem("all-users")) || [];
    //allUsers.push(userData); // إضافة مستخدم جديد
    //localStorage.setItem("all-users", JSON.stringify(allUsers)); // تخزين البيانات في localStorage
   // setAllUsers(allUsers); // تحديث الحالة
 // };
  const storeUsers = (userData) => {
  let allUsers = JSON.parse(localStorage.getItem("all-users")) || [];

  // تحقق إذا كان المستخدم موجودًا مسبقًا (مثلاً حسب email)
  const existingIndex = allUsers.findIndex(u => u.email === userData.email);

  if (existingIndex !== -1) {
    // تحديث المستخدم الموجود
    allUsers[existingIndex] = userData;
  } else {
    // إضافة مستخدم جديد
    allUsers.push(userData);
  }

  localStorage.setItem("all-users", JSON.stringify(allUsers));
  setAllUsers(allUsers);
};


  // دالة لتخزين بيانات الطلبات
  const storeOrders = (userId, ordersData) => {
    let allOrders = JSON.parse(localStorage.getItem("all-orders")) || [];
    allOrders.push({ userId, orders: ordersData }); // إضافة طلبات جديدة للمستخدم
    localStorage.setItem("all-orders", JSON.stringify(allOrders)); // تخزين البيانات في localStorage
    setAllOrders(allOrders); // تحديث الحالة
  };

  // دالة لتخزين بيانات سلة التسوق
  const storeData = (userId, cartData) => {
    let allCarts = JSON.parse(localStorage.getItem("all-carts")) || [];
    allCarts.push({ userId, cart: cartData }); // إضافة سلة جديدة للمستخدم
    localStorage.setItem("all-carts", JSON.stringify(allCarts)); // تخزين البيانات في localStorage
    setAllCarts(allCarts); // تحديث الحالة
  };

  // دالة لتخزين بيانات المحفظة
  const storeWallet = (userId, walletData) => {
    let allWallets = JSON.parse(localStorage.getItem("all-wallets")) || [];
    allWallets.push({ userId, wallet: walletData }); // إضافة محفظة جديدة للمستخدم
    localStorage.setItem("all-wallets", JSON.stringify(allWallets)); // تخزين البيانات في localStorage
    setAllWallets(allWallets); // تحديث الحالة
  };

  // UseEffect to load data into local state when the component mounts
  useEffect(() => {
    setAllCarts(JSON.parse(localStorage.getItem("all-carts")) || []);
    setAllOrders(JSON.parse(localStorage.getItem("all-orders")) || []);
    setAllUsers(JSON.parse(localStorage.getItem("all-users")) || []);
    setAllWallets(JSON.parse(localStorage.getItem("all-wallets")) || []);
  }, []);

  // Context value with all data and functions
  const value = useMemo(() => ({
    storeData,
    storeOrders,
    storeUsers,
    storeWallet,
    allCarts,
    allOrders,
    allUsers,
    allWallets
  }), [allCarts, allOrders, allUsers, allWallets]);

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
