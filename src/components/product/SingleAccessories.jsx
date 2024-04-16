//este archivo seria itemDetailContainer
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getAccessorie } from '../../firebase/firebase';
import { CartContext } from '../context/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function SingleAccessories() {
    const { accesId } = useParams();
    const [accessory, setAccessory] = useState(null);
    const { cartList } = useContext(CartContext);

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                const res = await getAccessorie(accesId);
                if (!ignore) {
                    const carritoNuevo = [...cartList];
                    const carritoDeCompra = carritoNuevo.find((acces) => acces.id === res.id);
                    if (carritoDeCompra) {
                        setAccessory({ ...res, stock: carritoDeCompra.stock - carritoDeCompra.quantity });
                    } else {
                        setAccessory(res);
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();

        return () => {
            ignore = true;
        };
    }, [accesId, cartList]);

    return (
        <>
            {accessory && (
                <div className='it-acces'>
                    <ItemDetail accessory={accessory} />
                </div>
            )}
        </>
    );
}
