import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccesorios, getAccessoriesByCategory } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';


export default function ItemListContainer() {
    const { catName } = useParams();
    const [accessories, setAccessories] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (catName) {
                    data = await getAccessoriesByCategory(catName);
                } else {
                    data = await getAccesorios();
                }
                setAccessories(data);
            } catch (error) {
                console.error("Error fetching data:", error);
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
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );
}
