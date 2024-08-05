import { useContext } from "react"
import { CartContext } from "../Provider/CartProvider"
import { TodoContext } from "../Provider/TodoProvider"

export const useCart = () => {
    return useContext(CartContext)
}

export const useTodo = () => {
    return useContext(TodoContext)
}