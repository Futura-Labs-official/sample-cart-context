import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ cart }) => {
    return (
        <div className='h-16 flex justify-between left-0 items-center px-5 w-screen fixed top-0 bg-gray-200 '>
            <div>
                <h1>HEADER</h1>
            </div>
            <div>
                {
                    cart ? <Link to={"/"}>HOME</Link> : <Link to={"/cart"}>CART</Link>
                }
            </div>
        </div>
    );
}

export default NavBar;
