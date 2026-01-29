import { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useWallet } from "./WalletProvider";
import "./walletModel.css";
import { motion, AnimatePresence } from "framer-motion";
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
            <AnimatePresence>
                <motion.section
                    className="wallet-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >


                    <section className="wallet-container flex-center glass-effect " style={{ perspective: "1200px" }}>
                        <motion.div
                            className="wallet-div-3d"
                            onClick={(e) => e.stopPropagation()}

                            // أنيميشن الفتح ثلاثي الأبعاد
                            initial={{
                                opacity: 0,
                                rotateY: -45,  // يبدأ مائلاً لليسار
                                rotateX: 10,   // ميلان بسيط للأمام
                                z: -500        // يبدأ بعيداً في العمق
                            }}
                            animate={{
                                opacity: 1,
                                rotateY: 0,
                                rotateX: 0,
                                z: 0
                            }}
                            exit={{
                                opacity: 0,
                                rotateY: 45,
                                z: -200
                            }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 100,
                                duration: 0.6
                            }}
                        >

                            <div className="wallet-div   " >

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
                        </motion.div>
                    </section>
                </motion.section>
            </AnimatePresence>
        </>

    );
}


