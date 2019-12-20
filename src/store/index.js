import {createStore} from 'redux';

import ProductsPage from "../components/ProductsPage/ProductsPage.js";
import CartPage from "../components/CartPage/CartPage.js";
import LoginPage from '../components/LoginPage/LoginPage.js'

function reducer(state, action) {
    let newCart = [...state.cart];
    let productIndex;
    switch (action.type) {
        case "SWITCH_PAGE":
            return {
                pageTitle: action.pageTitle,
                ...state
                //TODO: check to make sure that state is going to be in the proper format
            };
        case "ADD_PRODUCT":
            if (state.cart.some((product) => product.id === action.product.id)) {
                let productIndex = newCart.findIndex((product) => product.id === action.product.id);
                console.log(productIndex);
                newCart[productIndex].quantity += 1;
                return {
                    ...state,
                    cart: newCart
                }
            } else {
                newCart.push({
                    id: action.product.id,
                    product: action.product,
                    quantity: 1
                });
                return {
                    ...state,
                    cart: newCart
                }
            }
        case "CHANGE_CART_QUANTITY":
            productIndex = newCart.findIndex((product) => product.id === action.productId);
            newCart[productIndex].quantity += action.quantityAdjustment;
            if (newCart[productIndex].quantity > 0){
                return {
                    ...state,
                    cart: newCart
                };
            }
            else{
                newCart.splice(productIndex, 1);
                console.log(productIndex);
                console.log(newCart);
                return {
                    ...state,
                    cart: newCart
                };
            }
        case "REMOVE_PRODUCT":
            productIndex = newCart.findIndex((product) => product.id === action.productId);
            console.log("product index ", productIndex);
            console.log(action);
            newCart.splice(productIndex,1);
            return {
                ...state,
                cart: newCart
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
        {
            content: "Login",
            destination: '/login',
            component: LoginPage,
            pageTitle: "Login"
        },
    ],
    cart: []
};

const store = createStore(reducer, initialState);
export default store;