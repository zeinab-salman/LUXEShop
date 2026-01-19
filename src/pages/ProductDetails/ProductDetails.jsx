import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import { ProductsData } from "../../components/Data/ProductsData";
import CarouselProducts from "../../components/CarouselProducts/CarouselProducts"
import Button from "../../components/Button/Button";
import Form from 'react-bootstrap/Form';
export default function ProductDetails() {
  const { id } = useParams();
  const product = ProductsData.find(p => p.id === Number(id));
  if (!product) return <h2>Product Not Found </h2>;
  return (
    <>
      <section className="flex-center product-details ">
        <div className="bg-details">
          <div className=" details flex-center">

            <h2>{product.name}</h2>
            <p id="price">{product.price}</p>

            <div className="select-div">

              <Form.Select aria-label="Color" className="select">
                <option>Red</option>
                <option value="1">Blue</option>
                <option value="2">Green</option>
                <option value="3">Black</option>
              </Form.Select>
              <Form.Select aria-label="Quantity" className="select">
                <option>1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </Form.Select>
              <Form.Select aria-label="Size" className="select">
                <option>M</option>
                <option value="1">X</option>
                <option value="2">S</option>
                <option value="3">XL</option>
              </Form.Select>
              <Button text="Add To Cart" type="hero-btn" />
            </div>

          </div>
          <div className="details2">
            <img src={product.img} alt={product.name} />
            <CarouselProducts />
          </div>
        </div>
      </section>
    </>
  );
}
