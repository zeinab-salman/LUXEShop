import "./ProductFilter.css"
import Button from "../../components/Button/Button"
const ProductFilter = ({ categories, activeCategory, onFilter }) => {
    return (
        <div className="filter-buttons flex-center">
            <Button
               
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => onFilter("all")}
            
                text="All"
                type={`collection-btn ${activeCategory === "all" ? "active" : ""} `}
           />

            {categories.map((cat,index) => (
                <Button
                    key={index}
                    onClick={() => onFilter(cat)}
                    text={cat}
                    type={`collection-btn ${activeCategory === cat ? "active" : ""} `}
                />
            ))}
        </div>
    );
};

export default ProductFilter;