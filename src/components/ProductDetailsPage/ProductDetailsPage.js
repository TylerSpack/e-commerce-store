import React from 'react';

import store from '../../store';
import axios from "axios";
import "./ProductDetailsPage.css";

class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        if (store.getState().products.length === 0) {
            axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
                .then((res) => {
                    store.dispatch({
                        type: "LOAD_PRODUCTS",
                        products: res.data
                    });
                    let productID = Number(this.props.match.params.productID);
                    let product = store.getState().products.find(p => p.id === productID);
                    this.setState({
                            product: product
                        }
                    );
                });
        } else {
            this.setState({
                    product: store.getState().products.find(
                        product => product.id === Number(this.props.match.params.productID))
                }
            );
        }
        console.log("cdm here");

    }

    handleClick = () => {
        store.dispatch({
            type: "ADD_PRODUCT",
            product: this.state.product
        });
    };

    render() {
        if (this.state.product === undefined || this.state.product === null) {
            console.log("here", store.getState().products);
            return (<div>Loading...</div>);
        } else {
            return (
                <div className='detailsProduct'>
                    <span className="productTitle">{this.state.product.title}</span>
                    <div className='imageContainer'>
                        <img src={this.state.product.img} alt={this.state.product.title} className='image'/>
                    </div>
                    <span className="productDescription">{this.state.product.description}</span>
                    <span className="productPrice">${this.state.product.price.toFixed(2)}</span>
                    <span>{this.state.product.rating}/5 stars</span>
                    <button className='cartButton' onClick={this.handleClick}>Add To Cart</button>
                </div>
            );
        }

    }
}

export default ProductDetailsPage;