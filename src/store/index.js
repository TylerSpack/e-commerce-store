import {combineReducers, createStore} from 'redux';

import Footer from "../components/Footer";
import ProductsPage from "../components/ProductsPage";

function reducer(state, action){
    switch (action.type) {
        case "SWITCH_PAGE":
            return {
                pageTitle: action.pageTitle,
                ...state.links
            };
        default:
            return state;
    }
}

const initialState = {
    pageTitle: "defTitle",
    links: [
        {
            content: "products",
            destination: '/products',
            component: ProductsPage,
            pageTitle: "Products"
        },
        {
            content: "_h_",
            destination: '/placeholderComponentLocation',
            component: Footer,
            pageTitle: "Footer"
        }
    ],
    products:[
        {

        }
    ]
};

const store = createStore(reducer, initialState);
export default store;