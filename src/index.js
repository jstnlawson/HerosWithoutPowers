import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'


const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZA') {
        return [...action.payload]
    }else if (action.type === 'EMPTY') {
        return []
    }

    return state

}

const cart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    }
    if (action.type === 'REMOVE_FROM_CART') {
        return  state.filter(pizza => {return Number(pizza.pizzaItem.id) !== Number(action.payload)});
    }
    else if (action.type === 'EMPTY') {
        return []
    }

    return state
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        cart
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
         <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
