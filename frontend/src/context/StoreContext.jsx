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
            setCartItems(prev => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const key in cartItems) {
            const item = food_list.find(item => item._id === key);
            if (item) {
                total += item.price * cartItems[key];
            }
        }
        return total;
    }

    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;