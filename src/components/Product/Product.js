import React from 'react';

import './Product.css'

import store from '../../store'

class Product extends React.Component{
    handleClick = () => {
        store.dispatch({
            type: "ADD_PRODUCT",
            product: this.props.product
        });
    };
    setButtonText(){
         return this.props.isCart ? 'Remove From Cart' : 'Add To Cart';
    }
    render(){
        return(
            <div className='product'>
                <img src={this.props.product.img} alt={this.props.product.title}/>
                <div className='productContent'>
                    <div className='productInfo'>
                        <span className='productTitle'>{this.props.product.title}</span>
                        <span className='productDescription'>{this.props.product.description}</span>
                        <span className={'productPrice'}>${this.props.product.price}</span>
                        <span>{this.props.product.rating}/5 stars</span>
                    </div>
                    <button className='cartButton' onClick={this.handleClick}>{this.setButtonText()}</button>
                </div>
            </div>
        )
    }
}

export default Product;