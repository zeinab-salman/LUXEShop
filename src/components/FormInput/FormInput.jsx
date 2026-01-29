import "./FormInput.css";

const FormInput = ({ label, type = "text", name, value, onChange, placeholder, required }) => {
    return (
        <div className="div-input">
            {label && <label >{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-input"
                autoComplete="off"
            />
        </div>
    );
};

export default FormInput;