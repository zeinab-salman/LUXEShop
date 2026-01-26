import { useState } from "react";
import { ProductsData } from "../Data/ProductsData";
import ProductCom from "../productCom/ProductCom";
import ProductFilter from "../ProductFilter/ProductFilter";

const CollectiosSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    ...new Set(ProductsData.map((item) => item.category)),
  ];

  const filteredProducts =
    activeCategory === "all"
      ? ProductsData
      : ProductsData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div>
      <ProductFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
      />

      <div className="products-grid">
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