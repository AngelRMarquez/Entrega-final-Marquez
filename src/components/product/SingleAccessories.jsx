import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessorie } from '../../asyncMock';
import ItemCounter from './ItemCounter';

export default function SingleAccessories() {
    const { accesId } = useParams();
    const [accessory, setAccessory] = useState({});

    useEffect(() => {
        const fetchAccessory = async () => {
            try {
                const accessoryData = await getAccessorie(accesId);
                setAccessory(accessoryData);
            } catch (error) {
                console.error('Error fetching accessory:', error);
            }
        };

        fetchAccessory();
    }, [accesId]);

    const handleAddToCart = (quantity) => {
        console.log(`Agregando ${quantity} del accesorio ${accessory.nombre} al carrito`);
    };

    return (
        <div className="single-accessory-container">
            <h1>Accesorio {accesId}</h1>
            <h3 className="single-accessory-details">Nombre: {accessory.nombre}</h3>
            <img src={accessory.imagen} alt={accessory.nombre} className="single-accessory-image" />
            <p className="single-accessory-description">Descripcion: {accessory.descripcion}</p>
            <p className="single-accessory-category">Categoría: {accessory.categoria}</p>
            <p className="single-accessory-price">Precio: ${accessory.precio}</p>
            <ItemCounter stock={5} initial={0} onAdd={handleAddToCart} />
        </div>
    );
}
