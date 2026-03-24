import "./ContactInfo.css"
export default function ContactInfo({ text, title, divIcon }) {
    return (
        <>

            <div className="contact-info ">
                {divIcon}
                <div className="text-contact-info">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>

        </>
    );
}