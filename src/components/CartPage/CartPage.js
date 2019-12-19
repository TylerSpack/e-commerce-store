import React from 'react';

import './CartPage.css'
import store from '../../store'
import Product from "../Product/Product";

class CartPage extends React.Component{
    renderProducts(){
        console.log(store)
        return store.getState().cart.map((product, idx) => (
            <Product product={product} key={idx} isCart={true}/>
        ));
    }
    render(){
        return(
            <div className='products'>
                {this.renderProducts()}
            </div>
        )
    }
}

export default CartPage;