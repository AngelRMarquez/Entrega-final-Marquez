import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
    const {
        cartList, removeList, totalPrice, deleteItem, accesRestar, accesSumar,
    } = useContext(CartContext);

    const handleClearCart = () => {
        removeList();
    };

    const handleDeleteItem = (id) => {
        deleteItem(id);
    };

    const handleAccesRestar = (id, quantity) => {
        quantity > 1 ? accesRestar(id, quantity) : deleteItem(id);
    };
    
    const handleAccesSumar = (id, quantity, stock) => {
        stock > quantity && accesSumar(id, quantity);
    };

    return (
        <section className="cart-container">
            <h1>Accesorios en Carrito</h1>
            {cartList.length === 0 ? (
                <h2>Aún no se ha agregado nada al carrito</h2>
            ) : (
                <>
                    <div className="cart-items">
                        {cartList.map((accesorio) => (
                            <div key={accesorio.id} className="cart-item">
                                <div className="item-details">
                                    <div className="item-name">{accesorio.nombre}</div>
                                    <div className="item-name">Cantidad: {accesorio.quantity}</div>
                                    <div className="item-name">Precio Final: {accesorio.precio * accesorio.quantity}</div>
                                </div>
                                <div className="item-actions">
                                    <button className="action-button" onClick={() => handleAccesRestar(accesorio.id, accesorio.quantity)}>-</button>
                                    <button className="action-button" onClick={() => handleAccesSumar(accesorio.id, accesorio.quantity, accesorio.stock)}>+</button>
                                    <button className="action-button" onClick={() => handleDeleteItem(accesorio.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-price">
                        <h3>Total: ${totalPrice}</h3>
                        <button className="clear-cart-button" onClick={handleClearCart}>Vaciar Carrito</button>
                    </div>
                    <div className="checkout-container">
                        <Link to={`/checkout`} className="checkout-link">Finalizar Compra</Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;
