import React from 'react';

import './CartProduct.css'

import store from '../../store'
import StarRatings from "react-star-ratings";

class Product extends React.Component{
    handleClick = () => {
        store.dispatch({
            type: "REMOVE_PRODUCT",
            productId: this.props.product.id,
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
                        <StarRatings
                            rating={this.props.product.rating}
                            starRatedColor="gold"
                            numberOfStars={5}
                        />
                    </div>
                    <div>
                        <button className='cartButton' onClick={this.handleClick}>Remove From Cart</button>
                        <div>
                            <span className="quantity">Quantity: </span>
                            <button className="incrementButton" onClick={() => this.changeQuantity(-1)}>-</button>
                            <span className="quantity">{cartQuantity}</span>
                            <button className="incrementButton" onClick={() => this.changeQuantity(1)}>+</button>
                        </div>
                        <span className='totalPrice'>TOTAL: ${totalPrice.toFixed(2)}</span>

                    </div>

                </div>
            </div>
        )
    }
}

export default Product;