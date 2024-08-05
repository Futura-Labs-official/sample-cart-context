import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './Provider/CartProvider.jsx'
import { TodoProvider } from './Provider/TodoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <TodoProvider>
        <CartProvider>
            <App />
            <Toaster position='bottom-left' />
        </CartProvider>
    </TodoProvider>
        
    // </React.StrictMode>,
)
