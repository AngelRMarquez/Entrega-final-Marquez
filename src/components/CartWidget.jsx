import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const { cartList } = useContext(CartContext);
    const itemCount = cartList.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span className="badge badge-pill badge-danger">{itemCount}</span>
        </div>
    );
};

export default CartWidget;
