import React from 'react';
import {Link} from "react-router-dom";

import './LinkDisplay.css';

import store from "../../store";

class LinkDisplay extends React.Component {
    getCartQuantity() {
        let cartCopy = store.getState().cart;
        let itemsInCart = 0;
        for (let i = 0; i < cartCopy.length; i++) {
            itemsInCart += cartCopy[i].quantity;
        }
        return itemsInCart;
    }
    renderLinks() {
        return this.props.links.filter(link => link.condition()).map((link, idx) =>
            {
                if(link.destination === "/cart"){
                    return (
                        <Link to={link.destination} key={idx} className='routerLink cartLink'>
                            <i className="fas fa-shopping-cart"/>
                            {this.getCartQuantity() !== 0 ?
                                (<div className="cartQuantity">{this.getCartQuantity()}</div>) :
                            null}
                        </Link>
                    );
                }
                return (
                    <Link to={link.destination} key={idx} className='routerLink'>
                        <div className='link'>{link.content}</div>
                    </Link>
                );
            }
        );
    }

    render() {
        return (
            <div className='links'>
                {this.renderLinks()}
            </div>
        );
    }
}

export default LinkDisplay;