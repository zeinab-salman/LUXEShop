
import "./Title.css"
import TypeWriterText from "../TypeWriterText/TypeWriterText";
export default function Title({ title,text,type,span,line}) {

    return (
        <>
             <h2> {title}<span id="logo-span">{span}</span></h2>
             <div className={line}></div>
           <p className={`${type}`}>{text}</p>
        </>
    );
}
 