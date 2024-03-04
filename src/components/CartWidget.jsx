import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  const itemCount = 1; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge badge-pill badge-danger">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
