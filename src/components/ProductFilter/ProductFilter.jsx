import "./ProductFilter.css"
const ProductFilter = ({ categories, activeCategory, onFilter }) => {
    return (
        <div className="filter-buttons flex-center">
            <button
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => onFilter("all")}
            >
                All
            </button>

            {categories.map((cat) => (
                <button
                    key={cat}
                    className={activeCategory === cat ? "active" : ""}
                    onClick={() => onFilter(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default ProductFilter;