import "./Products.css"
import { ProductsData } from "../../components/Data/ProductsData";
import ProductCom from "../../components/productCom/ProductCom";
import Title from "../../components/Title/Title";
export default function Products() {
  return (
    <>
       <section className="products-sec flex-center">
                    
                     <Title
                     title=" Products"
                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit molestias repellat quidem distinctio et placeat ipsum consectetur nisi recusandae ullam provident ex, labore laboriosam totam harum quibusdam. Harum, repellendus?  "
                     type="text1"
                     />
                     <div className="flex-center div-products">
                         {
                             ProductsData.map((product,id) => (
                                 <ProductCom
                                     key={id}
                                     name={product.name}
                                     price={product.price}
                                     img={product.img}
                                     id={product.id}
                                     
                                 />
     
     
     
                             ))
     
                         }
     
                     </div>
                 </section>
    </>
  );
}
