import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ContactComponent from './components/contact/ContactComponent';
import NavBar from './components/navigation/NavBar';
import SingleAccessories from './components/product/SingleAccessories';
import ItemListContainer from './components/products/ItemListContainer';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {
    return (
        <div className="app">
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />    
                        <Route path="/product/:accesId" element={<SingleAccessories />} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/products/:catName" element={<ItemListContainer />} />
                        <Route path="/contact" element={<ContactComponent />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
};

export default App;
