import React, { useState } from 'react';

export default function ItemCounter({ stock, initial, onAdd }) {
    const [counter, setCounter] = useState(initial);

    const handleIncrement = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className='flex'>
            <button className="add-to-cart-btn" onClick={handleIncrement}>Agregar al carrito</button>
            <h4 className="counter">{counter}</h4>
            <button className="add-to-cart-btn" onClick={handleDecrement}>Eliminar del carrito</button>
            <h4 className="counter">Stock: {stock}</h4>
        </div>
    );
}
