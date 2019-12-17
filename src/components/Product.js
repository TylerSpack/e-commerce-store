import React from 'react';

class Product extends React.Component{
    render(){
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default Product;