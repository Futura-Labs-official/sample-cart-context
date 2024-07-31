import React, { Fragment, useEffect, useState } from 'react';
import { api } from '../axios';
import { useCart } from '../Hooks/Hooks';
import toast from 'react-hot-toast';
import Cart from './Cart';

const ApiCalling = () => {

    const [products, setProducts] = useState([])
    const { cartList, setCartList } = useCart()

    const getProducts = async () => {
        const { data: response } = await api.get("/products")
        setProducts(response)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const addToCart = (product) => {
        const index = cartList.findIndex((item) => item.id === product.id)
        if (index > -1) {
            const res = cartList.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        qty: item.qty + 1,
                        total_price: item.price * (item.qty + 1)
                    }
                }
                return item
            })
            setCartList(res)
            toast.success("Product Qty Updated")
        } else {
            product.qty = 1
            product.total_price = product.price
            setCartList([product, ...cartList])
            toast.success("Product Added To Cart")
        }
    }

    return (
       
        <Fragment>
            <div className='flex gap-3 px-5 justify-center flex-wrap mt-10'>
                {
                    products.map(item => {
                        const rating = item.rating?.rate
                        return (
                            <div key={item.id} className="w-48 p-3 bg-white">
                                <div className='w-full'>
                                    <img src={item.image} alt={item.title} className='aspect-square'/>
                                </div>
                                <div className='text-center w-full'>
                                    <p>{item.title.slice(0, 15)}...</p>
                                    <div className='flex justify-between mt-3'>
                                        <p className={`flex items-center ${rating<2 ? "text-red-600" : rating >= 2 && rating < 4 ? "text-yellow-600" : "text-green-600"}`}>{ rating } <i className='fa fa-star'/></p>
                                        <p>${ item.price }</p>
                                    </div>
                                    <button onClick={() => addToCart(item)} className='mt-5 bg-green-600 text-white w-full p-1'><i className='fa fa-cart-shopping'/> Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Cart />
        </Fragment>
    );
}

export default ApiCalling;
