import {createStore} from 'redux';

import {combineReducers} from "redux";

import cartReducer from "./cartReducer";
import loadCategoriesReducer from "./loadCategoriesReducer";
import loadProductsReducer from "./loadProductsReducer";
import userReducer from "./userReducer";

let reducer = combineReducers({
        cart: cartReducer,
        products: loadProductsReducer,
        categories: loadCategoriesReducer,
        user: userReducer,
        validUsers: () => [
            {
                username: 'admin',
                password: 'password',
                img: "https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v2382438315417247454/products/56423.main.png&height=500&width=500&quality=0.88"
            }
        ]
    }
);

const store = createStore(reducer);
console.log("store", store.getState());
export default store;