import { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useWallet } from "./WalletProvider";
import "./walletModel.css";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

export default function WalletModel({ isOpen, onClose }) {
    const { wallet, topUp } = useWallet();
    const [amount, setAmount] = useState("");
    const [transferNumber, setTransferNumber] = useState("");

    if (!isOpen) return null;

    const submit = (e) => {
        e.preventDefault();
        if (amount > 0 && transferNumber) {
            topUp(Number(amount), transferNumber);
            setAmount("");
            setTransferNumber("");
        }
    };
    return (
        <>
            <section className="wallet-container flex-center">
                <div className="wallet-div " >

                    <IoCloseSharp onClick={onClose} className="close-icon" />

                    <h2>Current Balance : ${wallet.balance}</h2>



                    <FormInput
                        type="number"
                        placeholder="Transaction Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}

                    />

                    <FormInput

                        type="text"
                        placeholder="Enter Transaction Code"
                        value={transferNumber}
                        onChange={(e) => setTransferNumber(e.target.value)}

                    />
                    <Button text="Confirm" type="hero-btn" onClick={submit} />
                </div>
            </section>

        </>

    );
}
