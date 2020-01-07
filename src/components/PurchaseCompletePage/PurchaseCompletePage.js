import React from 'react';

import './PurchaseCompletePage.css'
import {Link, Redirect} from "react-router-dom";
import store from '../../store';

class PurchaseCompletePage extends React.Component {
    constructor(props){
        super(props);
        let total = 0;
        store.getState().cart.forEach(currentProduct => {
            total += currentProduct.product.price * currentProduct.quantity;
        });
        this.state = {
            totalPrice: total
        };
    }
    componentDidMount() {
        store.dispatch({type: "CLEAR_CART"});
    }

    render() {
        if(this.state.totalPrice === 0){
            return (<Redirect to="/cart"/>);
        }
        return (
            <div className="completeContainer">
                <span className="mainGreeting">Thanks{!!store.getState().user.username ? " " + store.getState().user.username + "!" : "!"}</span>
                <span className="total">Your Total was ${this.state.totalPrice.toFixed(2)}</span>
                <span className="complete">Your purchase is complete.</span>
                <Link className="return" to="/products">Back to Products</Link>
            </div>
        );
    }
}

export default PurchaseCompletePage;