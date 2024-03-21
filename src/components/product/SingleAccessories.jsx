import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessorie } from '../../asyncMock';

export default function SingleAccessories() {
    const { accesId } = useParams();
    const [accessory, setAccessory] = useState({});
    const [counter, setCounter] = useState(0);

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

        return () => {
              };
    }, [accesId]);

    
    const handleAddToCart = (accessoryId) => {

        setCounter(counter + 1 );

        console.log(`Agregando al carrito el accesorio con ID ${accessoryId}`);
    };

    const handleRemoveFromCart = (accessoryId) => {

        if(counter > 0){
            setCounter(counter - 1);
        }else{
            console.log('ya esta en el minimo 0');
        }

        console.log(`Eliminando del carrito el accesorio con ID ${accessoryId}`);
    };


    return (
        <>
            <div className="single-accessory-container">
                <h1>Accesorio {accesId}</h1>
                <h3 className="single-accessory-details">Nombre: {accessory.nombre}</h3>
                <img src={accessory.imagen} alt={accessory.nombre} className="single-accessory-image" />
                <p className="single-accessory-description">Descripcion:       {accessory.descripcion}</p>
                <p className="single-accessory-category">Categoría: {accessory.categoria}</p>
                <p className="single-accessory-price">Precio: ${accessory.precio}</p>
                 <div className='accessory-b'>
                    <button  className="add-to-cart-btn" onClick={() => handleAddToCart(accessory.id)}>Agregar al carrito</button>
                        <h4 className="counter">{counter}</h4>
                    <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(accessory.id)}>Eliminar del carrito</button>
                 </div>   
              </div>
        </>
    );
}
