import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RestaurentProvider } from './Provider/RestaurentProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RestaurentProvider>
            <App />
        </RestaurentProvider>
        <Toaster position='top-right'/>
    </React.StrictMode>,
)
