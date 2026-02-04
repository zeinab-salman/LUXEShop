import "./ProfileModel.css";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { AuthContext } from "../../components/NavBar/AuthProvider";
import img1 from "../../../public/images/profile.jpg";
import { useStore } from "../../components/Data/StoreData";
const ProfileModel = ({ isOpen, onClose }) => {
  const { storeUsers } = useStore();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    photo: img1,
  });

  useEffect(() => {

    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
        photo: user.photo || img1,
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      photo: formData.photo,
      ...(formData.password && { password: formData.password }),
    };
    storeUsers(updatedUser);
    toast.success("Profile updated successfully", {
      duration: 4000,
      position: "top-center",
      removeDelay: 1000,
      className: "toaster",
    });

    setFormData((prev) => ({ ...prev, password: "" }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.section
        className="wallet-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <section
          className="user-profile-container flex-center glass-effect"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="wallet-div-3d"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, rotateY: -45, rotateX: 10, z: -500 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: 45, z: -200 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.6 }}
          >
            <form className="profile-form" onSubmit={handleSubmit}>
              <IoCloseSharp onClick={onClose} className="close-icon" />
              <h3 className="contact-text">My Profile Information</h3>

              {formData.photo && <img src={formData.photo} alt="profile" className="profile-img" />}

              <FormInput type="file" name="photo" placeholder="Photo" onChange={handleImgChange} />
              <FormInput
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
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
                type="password"
                name="password"
                placeholder="Leave blank if no change"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="flex-center btns-check">
                <Button text="Save" type="hero-btn" />
              </div>
            </form>
          </motion.div>
        </section>
      </motion.section>
    </AnimatePresence>
  );
};

export default ProfileModel;
