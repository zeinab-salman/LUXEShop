import "./FeaturedSection.css"
import { FeaturedData } from "../Data/FeaturedData";
import ProductCom from "../productCom/ProductCom";
import Title from "../Title/Title";
export default function FeaturedSection() {
    return (
        <>
            <section className="featuredSec flex-center">
                <Title title="Featured Products"/>
                <div className="flex-center featured-products">
                    {
                        FeaturedData.map((product,id) => (
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
