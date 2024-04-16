import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomeComponent = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a TechMac</h1>
            <p className='item-name'>Encuentra los mejores accesorios para tu dispositivo.</p>
        
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto custom-img"
                        src="./img/carr-techmac.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto custom-img"
                        src="./img/carru-techmac.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto custom-img"
                        src="./img/carrus-techmac.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeComponent;
