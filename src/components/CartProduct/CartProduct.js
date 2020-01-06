import React from 'react';

import './CartProduct.css'

import store from '../../store'

class Product extends React.Component{
    handleClick = () => {
        store.dispatch({
            type: "REMOVE_PRODUCT",
            productId: this.props.product.id
        });
        this.forceUpdate();
        //TODO: make this work
    };
    changeQuantity = (quantityAdjustment) => {
        store.dispatch({
            type: "CHANGE_CART_QUANTITY",
            productId: this.props.product.id,
            quantityAdjustment: quantityAdjustment
        })
    };
    render(){
        let cartQuantity = this.props.quantity;
        let totalPrice = this.props.quantity * this.props.product.price;
        return(
            <div className='product'>
                <img src={this.props.product.img} alt={this.props.product.title}/>
                <div className='productContent'>
                    <div className='productInfo'>
                        <span className='productTitle'>{this.props.product.title}</span>
                        <span className={'productPrice'}>${this.props.product.price}</span>
                        <span>{this.props.product.rating}/5 stars</span>
                    </div>
                    <div>
                        <button className='cartButton' onClick={this.handleClick}>Remove From Cart</button>
                        <div>
                            <span>Quantity: </span>
                            <button onClick={() => this.changeQuantity(1)}>+</button>
                            <span>{cartQuantity}</span>
                            <button onClick={() => this.changeQuantity(-1)}>-</button>
                        </div>
                        <span>TOTAL: ${totalPrice.toFixed(2)}</span>

                    </div>

                </div>
            </div>
        )
    }
}

export default Product;