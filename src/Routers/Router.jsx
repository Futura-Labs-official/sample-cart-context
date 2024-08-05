import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiCalling from '../components/ApiCalling';
import Cart from '../components/Cart';
import Todo from '../components/Todo';
import SingleTodo from '../components/SingleTodo';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ApiCalling}/>
                <Route path='/cart' Component={Cart}/>
                <Route path='/todo' Component={Todo}/>
                <Route path='/todo/v/:listId' Component={SingleTodo} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
