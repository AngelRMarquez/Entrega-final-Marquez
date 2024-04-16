import React, { useState } from 'react';

export default function ItemCounter({ stock, onAdd, disabled }) {
    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };
    
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className='flex'>
            <div className='f-row'>
                <button className="add-to-cart-btn" onClick={handleDecrement} disabled={counter === 1}> - </button>
                <h4 className='counter'>{counter}</h4>
                <button className="add-to-cart-btn" onClick={handleIncrement} disabled={counter === stock}> + </button>
            </div>

            <button
                className={`btnAgregar ${disabled || stock === 0 ? 'disabled' : ''}`}
                onClick={() => onAdd(counter)}
                disabled={disabled || stock === 0 || counter === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
}
