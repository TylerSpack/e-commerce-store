import React from 'react';

import './Product.css'

import store from '../../store'
import {
   Link
} from "react-router-dom";
import StarRatings from "react-star-ratings";

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
                        <Link to={'/productDetailsPage/' + this.props.product.id} className='productTitle'>
                            <span>{this.props.product.title}</span>
                        </Link>
                        <span className='productDescription'>{this.props.product.description}</span>
                        <span className={'productPrice'}>${this.props.product.price}</span>
                        <StarRatings
                            rating={this.props.product.rating}
                            starRatedColor="gold"
                            numberOfStars={5}
                        />
                    </div>
                    <button className='cartButton' onClick={this.handleClick}>{this.setButtonText()}</button>
                </div>
            </div>
        )
    }
}

export default Product;