import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessories } from "../../asyncMock";
import { useNavigate } from 'react-router-dom';

export default function ItemListContainer() {
    const { catName } = useParams();
    const [accessories, setAccessories] = useState([]);
    const navigate = useNavigate();
    
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

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <h2 className="h2">Categoría: {catName}</h2>
            <div className="accessories-list">
                {accessories.map(accessory => (
                    <div key={accessory.id} className="accessory-item">
                        <img src={accessory.imagen} alt={accessory.nombre} />
                        <h3>{accessory.nombre}</h3>
                        <p>Precio: ${accessory.precio}</p>
                        <button className="add-to-cart-btn" onClick={() => handleClick(accessory.id)}>Ver detalles</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
