
import "./VerificationCodeModel.css";
import { useState } from "react";
import Title from "../../components/Title/Title";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
export default function VerificationCodeModel() {
    const [formData, setFormData] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        code5: '',
        code6: '',

    });
    const handleChange = (e) => {
        const { name, value } =
            e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    
    const submit = (e) => {
        e.preventDefault();
        setCode("");
    }
    return (

        <>
            <section className="verification-section flex-center">
                <Title
                    title="Sign in with two-step verification"
                    text=" we've sent a 6 digit code to your email"
                    type="sections-description"
                />
                <p>Enter the code you recived:</p>
                <form    onSubmit={submit}>
                    <div className="flex-center inputs"  >
                    <FormInput
                        type="number"
                        name='code1'
                        value={formData.code1}
                        onChange={handleChange}
                     
                    />
                    <FormInput
                        type="number"
                        name="code2"
                        value={formData.code2}
                        onChange={handleChange}

                    />
                    <FormInput
                        type="number"
                        name="code3"
                        value={formData.code3}
                        onChange={handleChange}

                    />
                    <FormInput
                        type="number"
                        name="code4"
                        value={formData.code4}
                        onChange={handleChange}

                    />
                    <FormInput
                        type="number"
                        name="code5"
                        value={formData.code5}
                        onChange={handleChange}
                        
                    />
                    <FormInput
                        type="number"
                        name="code6"
                        value={formData.code6}
                        onChange={handleChange}

                    />
                    </div>
                    <Button
                    text="Continue"
                    type="details-btn"
                    />
                
                </form>
            </section>
        </>
    );
}


