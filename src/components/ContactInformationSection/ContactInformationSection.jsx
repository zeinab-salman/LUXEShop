import "./ContactInformationSection.css"
import Title from "../Title/Title";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useState } from 'react';
import ContactInfo from "../ContactInfo/ContactInfo"
import CircleIcon from "../CircleIcon/CircleIcon"
export default function ContactInformationSection() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } =
            e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (event) => {
         const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
        event.preventDefault();
        console.log("done", formData);
        alert(`${formData.username}`);
        const newSubject = {
            id: Date.now(),
            name: formData.name,
            email: formData.email.trim(),
            subject: formData.subject,
            message: formData.message,
        };

        subjects.push(newSubject);
        localStorage.setItem("subjects", JSON.stringify(subjects));
    };


    return (
        <>

            <section className="flex-center  contact-section">
                <Title
                    title="Get In Touch"
                    line="line-sec"
                    text="We'd love for hear you. Reach out with any questions."
                    type="sections-description "
                />
                <div className="contact-info2 flex-center">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3 className="contact-text ">Contact Us</h3>
                        <FormInput
                            type="text"
                            name="username"
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={formData.username}

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
                            name="subject"
                            placeholder="Subject"
                            onChange={handleChange}
                            value={formData.subject}
                        />
                        <textarea placeholder="Your Message" name="message" id="message" className="form-input" onChange={handleChange}
                            value={formData.message} ></textarea>

                        <button type="submit" className=" ">submit</button>
                    </form>

                    <div className="info">

                        <ContactInfo
                            title="123 luxe St,"
                            text="Fashion City"
                            divIcon={<CircleIcon icon={FaMapMarkedAlt} />}

                        />
                        <ContactInfo
                            title="support@luxeshop.com"
                            text="+1 234 567 890 "
                            divIcon={<CircleIcon icon={MdEmail} />}

                        />
                        <ContactInfo
                            title="+1 234 567 890"
                            text="Mon-Fri 9am - 6pm "
                            divIcon={<CircleIcon icon={FaPhone} />}
                        />
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12138397.294943286!2d33.37271077721939!3d42.032974332441405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135441d305c3d8c9%3A0xa819e3ec01d330a1!2sLuxe%20Shop!5e0!3m2!1sar!2sus!4v1769150415962!5m2!1sar!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </section>


        </>
    );
}
