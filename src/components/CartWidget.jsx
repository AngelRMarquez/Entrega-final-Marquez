import React, { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadCarrito } = useContext(CartContext);
    

    return (
      <>
      <button>{" "} <Link to={"./cart"}>
        {" "}
        <BsCart4  className="cart-icon" />
      </Link>
        </button> 
        <p className='cart-icon-cont'>{cantidadCarrito}</p>
     
      </>

    );
};

export default CartWidget;
