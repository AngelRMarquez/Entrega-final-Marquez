// ProductsComponent.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessories } from '../../asyncMock';

const ProductsComponent = () => {
    const navigate = useNavigate();
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        getAccessories.then((data) => {
            setAccessories(data);
        });
    }, []);

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="card-container">
        {accessories.map((accessory) => (
            <div className="card" key={accessory.id}>
                <img src={accessory.imagen} alt={accessory.nombre} />
                <div className="card-content">
                    <h4 className="card-title">{accessory.nombre}</h4>
                    <p className="card-price">Precio: ${accessory.precio}</p>
                    <button className="card-button" onClick={() => handleClick(accessory.id)}>Ver detalles</button>
                </div>
            </div>
        ))}
    </div>
    
    );
};

export default ProductsComponent;