import React from 'react';
import Product from "../Product/Product.js";
import axios from 'axios';
import './ProductsPage.css'
import Dropdown from "../Dropdown/Dropdown";
import store from "../../store";
class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            activeCategory: "All"
        }
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            .then((res) => {
                this.setState({
                    products: res.data
                });
                store.dispatch({
                    type: "LOAD_PRODUCTS",
                    products: res.data
                });
            });
        axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/categories")
            .then((res) => {
                this.setState({
                    categories: res.data,
                });
                store.dispatch({
                    type: "LOAD_CATEGORIES",
                    categories: res.data
                });
            });
    }

    renderProducts() {
        console.log(store.getState().products);
        return store.getState().products.filter(product => product.category === this.state.activeCategory
        || this.state.activeCategory === "All").map((product, idx) => (
            <Product product={product} key={idx}/>
        ));
    }
    setCategory = (category) => {
        this.setState({
            activeCategory: category
        });
    };
    render() {
        return (
            <div>
                <Dropdown options={store.getState().categories} selected={this.state.activeCategory} dataReciever={this.setCategory}/>
                <div className='products'>
                    {this.renderProducts()}
                </div>
            </div>
        )
        //TODO: add method that receives data
    }
}

export default ProductsPage;