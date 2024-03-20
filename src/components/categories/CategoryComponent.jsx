// components/category/CategoryComponent.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAccessories } from "../../asyncMock";
import CartWidget from "../CartWidget";

export default function CategoryComponent() {
    const { catName } = useParams();
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allAccessories = await getAccessories;
                const accessoriesInCategory = allAccessories.filter(accessory => accessory.categoria === catName);
                setAccessories(accessoriesInCategory);
            } catch (error) {
                console.error('Error al obtener los accesorios:', error);
            }
        };

        fetchData();
    }, [catName]);

    const handleAddToCart = (accessoryId) => {

        console.log(`Agregando al carrito el accesorio con ID ${accessoryId}`);
    };

    const handleRemoveFromCart = (accessoryId) => {
        console.log(`Eliminando del carrito el accesorio con ID ${accessoryId}`);
    };

    return (
        <div>
            <h2>Categoría {catName}</h2>
            <div className="accessories-list">
                {accessories.map(accessory => (
                    <div key={accessory.id} className="accessory-item">
                        <h3>{accessory.nombre}</h3>
                        <p>Precio: ${accessory.precio}</p>
                        <p>Descripción: {accessory.descripcion}</p>
                        <img src={accessory.imagen} alt={accessory.nombre} />
                        <div className="accessory-buttons">
                        <button  className="add-to-cart-btn" onClick={() => handleAddToCart(accessory.id)}>Agregar al carrito</button>
                        <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(accessory.id)}>Eliminar del carrito</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
