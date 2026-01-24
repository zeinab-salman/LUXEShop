import "./Button.css"

export default function Button({text,type,onClick}) {

   
    return (
        <>
            
               <button className={` ${type}`} onClick={onClick}>{text}</button>
                   
        </>
    );
}
