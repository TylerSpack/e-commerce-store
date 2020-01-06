import React from 'react';

import './CartPage.css'
import store from '../../store'
import CartProduct from "../CartProduct/CartProduct";

class CartPage extends React.Component {
    renderProducts() {
        return store.getState().cart.map((cartItem, idx) => {
            let quantity = store.getState().cart.find(cartProduct => cartProduct.id === cartItem.product.id).quantity;
            return (
                <CartProduct quantity={quantity} product={cartItem.product} key={idx} isCart={true}/>
            )
        });
    }

    calculateTotal() {
        let total = 0;
        store.getState().cart.forEach(currentProduct => {
            total += currentProduct.product.price * currentProduct.quantity;
        });
        return total;
    }

    render() {
        if (store.getState().cart.length > 0) {
            return (
                <div className='products'>
                    {this.renderProducts()}
                    <span>TOTAL: ${this.calculateTotal().toFixed(2)}</span>
                </div>
            );
        } else {
            return (
                <div className='products'>
                    <span>The Cart is Empty</span>
                </div>
            );
        }

    }
}

export default CartPage;