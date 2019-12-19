import React from 'react';
import Product from "../Product/Product.js";
import axios from 'axios';
import './ProductsPage.css'
import Dropdown from "../Dropdown/Dropdown";

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            activeCategory: ""
        }
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            .then((res) => {
                this.setState({
                    products: res.data
                });
            });
        axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/categories")
            .then((res) => {
                this.setState({
                    categories: res.data,
                    activeCategory: res.data[0]
                });
            });
    }

    renderProducts() {
        return this.state.products.filter(product => product.category === this.state.activeCategory
        ).map((product, idx) => (
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
                <Dropdown options={this.state.categories} dataReciever={this.setCategory}/>
                <div className='products'>
                    {this.renderProducts()}
                </div>
            </div>
        )
        //TODO: add method that receives data
    }
}

export default ProductsPage;