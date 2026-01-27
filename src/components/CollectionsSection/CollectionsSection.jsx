import { useEffect, useState } from "react";
import { ProductsData } from "../Data/ProductsData";
import ProductCom from "../productCom/ProductCom";
import ProductFilter from "../ProductFilter/ProductFilter";
import "./CollectionsSection.css";
import { useLocation } from "react-router-dom";
const CollectiosSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const location = useLocation();
    useEffect(() => { if (location.state && location.state.selectedCategory) { setActiveCategory(location.state.selectedCategory); } }, [location.state])
    const categories = [
        ...new Set(ProductsData.map((item) => item.categor)),
    ];

    const filteredProducts =
        activeCategory === "all"
            ? ProductsData
            : ProductsData.filter(
                (item) => item.categor === activeCategory
            );

    return (
        <div>
            <ProductFilter
                categories={categories}
                activeCategory={activeCategory}
                onFilter={setActiveCategory}
            />

            <div className="products-filter flex-center">
                {filteredProducts.map((product) => (
                    <ProductCom
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};
export default CollectiosSection;