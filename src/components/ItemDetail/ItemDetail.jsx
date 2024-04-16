
import { useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from '../product/ItemCounter'
import { Link } from 'react-router-dom';


export default function ItemDetail({accessory}) {
    const[quantityAdd, setQuantityAdd] = useState(0);    
const{cartList, setCartList} = useContext(CartContext);

const handleManejar = (quantity) => {
    setQuantityAdd(quantity);
    const accesorioAgregado = {
      ...accessory,
      quantity,
      
    };
    let carritoNuevo = [...cartList];
    const carritoDeCompra = carritoNuevo.find((acces) => acces.id === accesorioAgregado.id);
    if (carritoDeCompra) {
      carritoDeCompra.quantity += quantity;
    } else {
      carritoNuevo.push(accesorioAgregado);
    }
    setCartList(carritoNuevo);
  };
  return (
    <>
      {accessory.nombre ? (
        <div className="card">
          <img className="card-image" src={`../${accessory.imagen}`} alt={accessory.nombre} />
          <div className="card-body">
            <h2 className="card-title">{accessory.nombre}</h2>
            <p className="card-text">{accessory.descripcion}</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Precio: ${accessory.precio}</li>
            {accessory.stock >= 1 ? (
              <li className="list-group-item">Stock disponible: {accessory.stock}</li>
            ) : (
              <li className="list-group-item out-of-stock">Sin stock</li>
            )}
          </ul>

          <div>
            {quantityAdd > 0 ? (
              <div className="flex">
                <button className="button">
                  <Link className="link" to={"/"}>Volver</Link>
                </button>
                <button className="button">
                  <Link className="link" to={"/cart"}>Ver carrito</Link>
                </button>
              </div>
            ) : (
              <ItemCount
                stock={accessory.stock}
                onAdd={handleManejar}
                disabled={accessory.stock === 0}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="card loading">
          <img className="card-image" src={"../img/loading.png"} alt={accessory.nombre} />
          <div className="card-body">
            <h2 className="card-title loading-title">Cargando...</h2>
            <p className="card-text loading-text">Cargando información del producto...</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item loading-item"></li>
            <li className="list-group-item loading-item"></li>
          </ul>

          <div className="itemCountContainer">
            <ItemCount
              stock={accessory.stock}
              onAdd={handleManejar}
              disabled={accessory.stock === 0}
            />
          </div>
        </div>
    )}
    </>
  );
}