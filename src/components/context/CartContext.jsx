import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);


    const cantidadCarrito = cartList.reduce((acc, acces) => acc + acces.quantity,0
    ); 

    const removeList = () => {
        setCartList([]);
    };

    const totalPrice = cartList.reduce(
        (acc, acces) => acc + acces.quantity * acces.precio, 0
    );

    const deleteItem = (id) => {
        setCartList(cartList.filter(acces => acces.id != id))
    };

    const accesRestar = (id, quantity) => {
        const updateData = cartList.map(obj => 
            obj.id === id ? { ...obj, quantity: quantity - 1 } : obj
        );
        setCartList(updateData);
    }
    
    const accesSumar = (id, quantity) => {
        const updateData = cartList.map(obj => 
            obj.id === id ? { ...obj, quantity: quantity + 1 } : obj
        );
        setCartList(updateData);
    }
    

    return (
        <CartContext.Provider value={{
             cartList, setCartList, cantidadCarrito, removeList, totalPrice, deleteItem, accesRestar,accesSumar }}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContextProvider;
