import { useContext } from "react"
import { RestaurentContext } from "../Provider/RestaurentProvider"

export const useRestraurent = () => {
    return useContext(RestaurentContext)
}