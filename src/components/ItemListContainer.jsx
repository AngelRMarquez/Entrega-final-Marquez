import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container mt-3">
      <h2 className='h2'>{greeting}</h2>
      <div className='contador'>
        <p>Agregar al carrito: {counter}</p>
        <button className="btnn btn-primary" onClick={handleIncrement}>Agregar</button>
        <button className="btnn btn-secondary" onClick={handleDecrement}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemListContainer;
