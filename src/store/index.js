import {createStore} from 'redux';

import ProductsPage from "../components/ProductsPage/ProductsPage.js";
import CartPage from "../components/CartPage/CartPage.js";

function reducer(state, action){
    switch (action.type) {
        case "SWITCH_PAGE":
            return {
                pageTitle: action.pageTitle,
                ...state
                //TODO: check to make sure that state is going to be in the proper format
            };
        case "ADD_PRODUCT":
            return {
                cart: state.cart.push(action.product),
                ...state
            };
        default:
            return state;
    }
}

const initialState = {
    pageTitle: "defTitle",
    links: [
        {
            content: "Products",
            destination: '/products',
            component: ProductsPage,
            pageTitle: "Products"
        },
        {
            content: "Cart",
            destination: '/cart',
            component: CartPage,
            pageTitle: "Cart"
        },
    ],
    cart:[]
    // products:[
    //     {
    //
    //     }
    // ]
};

const store = createStore(reducer, initialState);
export default store;