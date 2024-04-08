import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const existingItemIndex = cartList.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCartList = [...cartList];
            updatedCartList[existingItemIndex].quantity += qty;
            setCartList(updatedCartList);
        } else {
            setCartList(prevCartList => [...prevCartList, { ...item, quantity: qty }]);
        }
    };

    const removeList = () => {
        setCartList([]);
    };

    const deleteItem = (id) => {
        const updatedCartList = cartList.filter(item => item.id !== id);
        setCartList(updatedCartList);
    };

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
