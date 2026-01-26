
import "./Title.css"
export default function Title({ title, text, type, span, line }) {

    return (
        <>
            <h2 className="title-text"> {title}<span id="logo-span">{span}</span></h2>
            <div className={line}></div>
            <p className={`${type}`}>{text}</p>
        </>
    );
}
