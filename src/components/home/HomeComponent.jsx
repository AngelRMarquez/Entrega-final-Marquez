// HomeComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const HomeComponent = () => {
    return (
        <div className="home-container">
            
            <h1>Bienvenido a TechMac</h1>
            <p>Encuentra los mejores accesorios para tu dispositivo.</p>
            <h2>Categorias</h2>
            <Link className="category-link" to="/category/fundas">Ver Fundas</Link>
            <Link className="category-link" to="/category/auriculares">Ver Auriculares</Link>
            <Link className="category-link" to="/category/cargadores">Ver Cargadores</Link>
        </div>
    );
};

export default HomeComponent;
