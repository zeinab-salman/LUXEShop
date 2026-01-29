import "./ProfileModel.css"
import Title from "../../components/Title/Title";
import { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import img1 from "../../../public/images/profile.jpg"
import { AuthContext } from "../../components/NavBar/AuthProvider";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
const ProfileModel = ({ isOpen, onClose }) => {
    console.log(isOpen);
    if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState('personal');
    const { user, setUser } = useContext(AuthContext);

    const [formData, setFormData] =
        useState({

            name: '',
            email: '',
            password: '',
            address: '',
            photo: img1

        })
    useEffect(() => {
        const savedUser = localStorage.getItem("user_info");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);


            setFormData({
                name: parsedUser.name || "",
                email: parsedUser.email || "",
                address: parsedUser.address || "",
                photo: parsedUser.photo || "",
                password: ""
            });

        }
    }, [user]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imgURL = URL.createObjectURL(e.target.files[0]);
            setFormData({ ...formData, photo: imgURL });
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log('save done', formData);
        toast.success('update done', {
            duration: 4000,
            position: 'top-center',
            removeDelay: 1000,
            toasterId: 'default',
            className: 'toaster',


        });

    
    const updatedUser = {
        ...user,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        photo: formData.photo,
        ...(user.password && { password: formData.password })
    };

    localStorage.setItem("user_info", JSON.stringify(updatedUser));
    //alert("Profile updated successfully");

}

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
                <section className="user-profile-container flex-center glass-effect" style={{ perspective: "1200px" }} >
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



                        <form className="profile-form" onSubmit={handleSubmit}>

                            <IoCloseSharp onClick={onClose} className="close-icon" />
                            <h3 className="contact-text ">My Profile Information</h3>
                            <div>
                                {
                                    formData.photo ?
                                        (
                                            <img src={formData.photo} alt="profile" className="profile-img" />
                                        ) : (

                                            <div> </div>
                                        )
                                }

                            </div>
                            <FormInput
                                type="file"
                                name="Photo"
                                placeholder="Photo"

                                onChange={handleImgChange}


                            />
                            <FormInput
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                value={formData.name}

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
                                type="password"
                                name="password"
                                placeholder=" leave it blank if you don't want to make a change "
                                onChange={handleChange}
                                value={formData.password}
                            />

                            <div className="flex-center btns-check ">
                                <Button
                                    text="Save "
                                    type="hero-btn"
                                    onClick={handleSubmit}
                                />


                            </div>

                        </form>
                    </motion.div>
                </section>
            </motion.section>
        </AnimatePresence>
    </>
);
}
export default ProfileModel;
