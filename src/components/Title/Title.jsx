
import "./Title.css"
export default function Title({ title,text,type}) {

    return (
        <>
             <h2> {title  }</h2>
             <p className={`${type}`}>{text}</p> 
               
        </>
    );
}