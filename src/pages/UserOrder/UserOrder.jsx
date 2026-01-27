import "./UserOrder.css"
import { CartProvider } from "../UserCart/CartProvider";
import { useCart } from '../UserCart/CartProvider';
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function UserOrder() {
    const { orders, cancelOrder } = useCart();
    const [searchTerm, setSearchTerm] = useState("");
    const filteredOrders = orders.filter(order =>
        order.id.toString().includes(searchTerm) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <section className="orders-section flex-center">
            <Title title="My Orders" line="line-sec" type="sections-descriptions" />
            <div className="search-div">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search by Order ID or Product name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="orders-carts flex-center">
                {filteredOrders.length === 0 ? (
                    <p className="not-found-text">No orders found.</p>
                ) : (
                    filteredOrders.map(order => (
                        <div className="order-cart" key={order.id}>
                            <img src={order.img} />
                            <MdCancel className="delete-icon" onClick={() => cancelOrder(order.id)} />
                            <div className="order-id">  <h3>Order #{order.id}</h3> </div>
                            <div className="total">
                                <p>Total: ${order.total}</p></div>
                            <ul className="order-details">
                                {order.items.map(item => <li key={item.id}> <img src={item.img} className="order-img" />  {item.name} - Quantity:{item.quantity}</li>)}
                            </ul>
                        </div>
                    )))}
            </div>
        </section>
    );
}
