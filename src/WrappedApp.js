import {Provider} from "react-redux";
import store from "./store";
import React from "react";
import App from './App';

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;