import { createContext, useState } from "react";

export const RestaurantContext = createContext()

export const RestaurantProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useState([])

    return (
        <RestaurantContext.Provider value={{restaurant, setRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    )
}