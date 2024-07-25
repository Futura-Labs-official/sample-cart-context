import { useContext } from "react"
import { RestaurantContext } from "../Provider/RestaurantProvider"

export const useRestaurant = () => {
    return useContext(RestaurantContext)
}