import React from 'react';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluidd">
                <a className="font-techmac" href="/">
                    <img src="./img/techmac-logo.jpeg" alt="logo" />TechMac</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-linkk active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-linkk active" aria-current="page" to="/products/fundas">Fundas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-linkk active" aria-current="page" to="/products/auriculares">Auriculares</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-linkk active" aria-current="page" to="/products/cargadores">Cargadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-linkk active" aria-current="page" to="/contact">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" />
                        <button className="btn btn-outline-successs" type="submit">Búsqueda</button>
                    </form>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
