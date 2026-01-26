import "./FeaturedSection.css"
import { FeaturedData } from "../Data/FeaturedData";
import ProductCom from "../productCom/ProductCom";
import Title from "../Title/Title";
export default function FeaturedSection() {
    return (
        <>
            <section className="featuredSec flex-center">
                <Title title="Featured Products"
                    text="Handpicked essentials that define modern luxury. Each piece tells a story of craftsmanship and timeless elegance."
                    line="line-sec"
                    type="sections-description"
                />
                <div className="flex-center featured-products">
                    {
                        FeaturedData.map((product, id) => (
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
