import "./Products.css"
import { ProductsData } from "../../../components/Data/ProductsData";
import ProductCom from "../../../components/productCom/ProductCom";
import Title from "../../../components/Title/Title";
import SearchInputComponent from "../../../components/SearchInputComponent/SearchInputComponent";
import { useState } from "react";
export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = ProductsData.filter((product) => {
        const matchesName = product.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

        return matchesName;
    }
    );
    return (
        <>
            <section className="products-sec flex-center">
                <Title
                    title=" Products"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit molestias repellat quidem distinctio et placeat ipsum consectetur nisi recusandae ullam provident ex,  "
                    line="line-sec"
                    type="sections-description"
                />
                <SearchInputComponent
                    placeholder="Search by Product name..."
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}

                />
                <div className="flex-center div-products">
                    {filteredProducts.length === 0 ? (
                        <p className="not-found-text">No orders found.</p>
                    ) : (

                        filteredProducts.map((product, id) => (
                            <ProductCom
                                key={id}
                                name={product.name}
                                price={product.price}
                                img={product.img}
                                id={product.id}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
