// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ContactComponent from './components/contact/ContactComponent';
import NavBar from './components/navigation/NavBar';
import SingleAccessories from './components/product/SingleAccessories';
import CategoryComponent from './components/categories/CategoryComponent.jsx';

const App = () => {

    
    return (

            
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />    
                    {/* <Route path="/products" element={<ProductsComponent />} /> */}
                    <Route path="/product/:accesId" element={<SingleAccessories />} />
                    <Route path="/category/:catName" element={<CategoryComponent />} />
                    {/* <Route path="/category/:catName" element={<ItemListContainer />} /> */}
                    <Route path="/contact" element={<ContactComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
