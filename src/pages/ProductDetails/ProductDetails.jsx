import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import { ProductsData } from "../../components/Data/ProductsData";
import { Carousel } from "bootstrap";
import Button from "../../components/Button/Button";
export default function ProductDetails() {
  const {id}=useParams();
  const product=ProductsData.find(p=>p.id === Number(id));
  if (!product) return <h2>Product Not Found </h2>;
  return (
    <>
     <section className="product-details flex-center">
      <img src={product.img} alt={product.name}/>
      <h2>{product.name}</h2>
     <p>{product.price}</p>
     <div>
    <select >
      
      <option> red</option>
       <option>blue</option>

    </select>
    <select >
      
      <option> x</option>
       <option>x-large</option>

    </select>
     <select >
     
      <option> quantity1</option>
       <option>quantity2</option>
</select>
    </div>

     <Button text="Add To Cart" type="cart"/>
     
     </section>
    </>
  );
}
