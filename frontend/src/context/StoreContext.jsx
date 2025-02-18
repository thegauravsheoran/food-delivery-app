import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        if (!cartItems[id]) {
            setCartItems(prev => ({ ...prev, [id]: 1 }))
        }
        else {
            setCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))
        }
    }

    const removeFromCart = (id) => {
        // if (cartItems[id] === 1) {
        //     const newCartItems = { ...cartItems }
        //     delete newCartItems[id]
        //     setCartItems(newCartItems)
        // }
        // else {
            setCartItems(prev => ({ ...prev, [id]: prev[id] - 1 }))
        // }
    }

    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;