import React from 'react';
import Product from "./Product";

import store from '../store'

class ProductsPage extends React.Component{
    renderProducts(){
        store.getState().products.map((product, idx) => (
            <Product title="this is a title"/>
        ));
    }
    render(){
        return(
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}

export default ProductsPage;