import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/NavBar/AuthProvider";

const WalletContext = createContext();

const defaultWallet = () => ({
  balance: 0,
  transactions: [],
  rewardReceived: false,
});

export const WalletProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [wallet, setWallet] = useState(() => defaultWallet());

  useEffect(() => {
    if (!user) {
      setWallet(defaultWallet());
      return;
    }
    const key = `wallet_${user.id}`;
    const storedWallet = localStorage.getItem(key);

    if (storedWallet) {
      setWallet(JSON.parse(storedWallet));
    } else {
      setWallet(defaultWallet());
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;

    const key = `wallet_${user.id}`;
    localStorage.setItem(key, JSON.stringify(wallet));
  }, [wallet, user]);

  const topUp = (amount, transferNumber) => {
    if (!amount || !transferNumber) return;

    const exists = wallet.transactions.some(
      (t) => t.transferNumber === transferNumber,
    );

    if (exists) {
      alert("This Number already used");
      return;
    }

    setWallet((prev) => ({
      ...prev,
      balance: prev.balance + Number(amount),
      transactions: [
        ...prev.transactions,
        {
          id: Date.now(),
          amount: Number(amount),
          transferNumber,
          date: new Date().toISOString(),
        },
      ],
    }));
  };

  const rewardOrder = () => {
    if (wallet.rewardReceived) {
      alert("Order Confirmed");
      return;
    }

    setWallet((prev) => ({
      ...prev,
      balance: prev.balance + 5,
      rewardReceived: true,
    }));
  };

  return (
    <WalletContext.Provider value={{ wallet, topUp, rewardOrder }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
