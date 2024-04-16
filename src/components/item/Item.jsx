import { Link } from "react-router-dom";

function Item({ accesorio }) {
  const { id, imagen, nombre, descripcion, precio } = accesorio;

  return (
    <>
      <div className="product-card">
        <img className="product-image" src={imagen} alt={nombre} />
        <div className="product-details">
          <h2 className="product-name">{nombre}</h2>
          <p className="product-price">Precio: ${precio}</p>
          <p className="product-description">{descripcion}</p>
          <Link to={`/products/${id}`} className="product-detail-link">
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
