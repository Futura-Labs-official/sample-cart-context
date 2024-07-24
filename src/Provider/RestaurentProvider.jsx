import { createContext, useState } from "react";

export const RestaurentContext = createContext()

export const RestaurentProvider = ({ children }) => {

    const [restaurent, setRestaurent] = useState([])

    return (
        <RestaurentContext.Provider value={{restaurent, setRestaurent}}>
            {children}
        </RestaurentContext.Provider>
    )
}