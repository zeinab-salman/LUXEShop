import { useState, useEffect } from "react";
import AddProductModal from "../../../components/AddProductModal/AddProductModal";
import ProductItemDashboard from "../../../components/ProductItemDashboard/ProductItemDashboard";
import SearchInputComponent from "../../../components/SearchInputComponent/SearchInputComponent";
import Title from "../../../components/Title/Title";
import MenuComponent from "../../../components/MenuComponent/MenuComponent";
import { FaCirclePlus } from "react-icons/fa6";
import "./ProductsDashboard.css";

export default function ProductsDashboard() {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("all-products");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("all-products", JSON.stringify(products));
    }, [products]);

    const [searchTerm, setSearchTerm] = useState("");
    const [isAddOpen, setIsAddOpen] = useState(false);
    const filteredProducts = products.filter(product =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(product => product.id !== id));
    };

    const editProductFromParent = (id, updatedData) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === id
                    ? { ...product, ...updatedData, price: Number(updatedData.prise || updatedData.price) }
                    : product
            )
        );
    };

    const addProduct = (newProduct) => {
        setProducts(prev => [...prev, newProduct]);
    };

    return (
        <>

            <section className="flex-center sec-products-dash">
                <Title
                    title="Your Products - Add & Edit & Delete"
                    type="sections-description"
                    line="line-sec"
                    type2="title-dash2"
                />
                <div className="flex-center head-search">
                    <SearchInputComponent
                        placeholder="Search by Product name..."
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <button className="flex-center add-btn" onClick={() => setIsAddOpen(true)}>
                        Add Product <FaCirclePlus className="plus-icon" />
                    </button>
                </div>

                <MenuComponent />

                {filteredProducts.length === 0 ? (
                    <p className="not-found-text empty-sec">No Products found.</p>
                ) : (
                    filteredProducts.map(product => (
                        <ProductItemDashboard
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            name={product.name}
                            categor={product.categor || product.category}
                            date={product.date}
                            prise={product.price}
                            deleteProduct={deleteProduct}
                            editProductFromParent={editProductFromParent}
                        />
                    ))
                )}
            </section>

            <AddProductModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onAdd={addProduct}
            />
        </>
    );
}
