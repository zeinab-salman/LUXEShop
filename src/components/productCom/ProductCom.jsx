import Button from "../Button/Button";
import "./ProductCom.css"
import { Link } from "react-router-dom";


export default function ProductCom({ id, img, name, price}) {

   
    return (
        <>
            
                <div className="product-item"  >
                   
                    <div className="img-div">
                    <img src={img} alt="photo" />
                    </div>
                    
                    <div className="content-div">
                    <h3>{name}</h3>
                    <p>{price}</p>
                     <Link to={`/Products/${id}` }  >
                   <Button text="Details" type="product-item-btn"/>
                    </Link>
                    </div>
                </div>
               
        </>
    );
}
