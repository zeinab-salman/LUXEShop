import "./Button.css"

export default function Button({text,type}) {

   
    return (
        <>
            
               <button className={` ${type}`} >{text}</button>
                   
        </>
    );
}
