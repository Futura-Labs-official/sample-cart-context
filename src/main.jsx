import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RestaurantProvider } from './Provider/RestaurantProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RestaurantProvider>
            <App />
        </RestaurantProvider>
        <Toaster position='top-right'/>
    </React.StrictMode>,
)
