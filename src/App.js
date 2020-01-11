import React from 'react';

import Header from './components/Header/Header.js';
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CartPage from "./components/CartPage/CartPage.js";
import LoginPage from './components/LoginPage/LoginPage.js'
import ProfilePage from "./components/ProfilePage/ProfilePage";

import {Provider} from "react-redux";
import store from './store';
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import PurchaseCompletePage from "./components/PurchaseCompletePage/PurchaseCompletePage";
import Footer from "./components/Footer/Footer";


class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path="/products" component={ProductsPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/productDetailsPage/:productID" component={ProductDetailsPage}/>
                        <Route path="/purchaseComplete" component={PurchaseCompletePage}/>
                        <Route path="/" component={LoginPage}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
