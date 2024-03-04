import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluidd">
          <a className="font-techmac" href="#">TechMac</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-linkk active" aria-current="page" href="#">Fundas</a>
              </li>

              <li className="nav-item">
                <a className="nav-linkk active" aria-current="page" href="#">Cargadores</a>
              </li>

              <li className="nav-item">
                <a className="nav-linkk active" aria-current="page" href="#">Auriculares</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search" /> 
              <button className="btn btn-outline-successs" type="submit">Busqueda</button>
            </form>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};



export default NavBar;
