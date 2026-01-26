import "./UserOrder.css"
import { CartProvider } from "../UserCart/CartProvider";
export default function UserOrder() {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {

        return (
            <section className="cart-container empty-cart">
                <h2>No Orders </h2>
                <Link to="/"><Button text="Go Back to Shopping" type="hero-btn" /></Link>
            </section>
        );
    }


    return (
        <section className="cart-container " >
            <Title
                title="Shopping Cart"
                line="line"
            />
            <div className=" cart-info">
                <div className="cart-items">

                    {cartItems.map((item) => (
                        <div key={item.id} className="product-cart" >
                            <img src={item.img} alt={item.name} />
                            <div className="cart-right">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    );


}
