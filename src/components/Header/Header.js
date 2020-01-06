import React from 'react';

import store from '../../store'
import LinkDisplay from "../LinkDisplay/LinkDisplay.js";
import './Header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links:[
                {
                    content: "Products",
                    destination: '/products',
                    condition: () => true
                },
                {
                    content: "Login",
                    destination: '/login',
                    condition: () => !store.getState().user.username
                },
                {
                    content: "Profile",
                    destination: '/profile',
                    condition: () => !!store.getState().user.username
                },
                {
                    content: <i className="fas fa-shopping-cart"/>,
                    destination: '/cart',
                    condition: () => true
                },
            ]
        }
    }
    render() {
        return (
            <div className='navBar'>
                <span className='title'>Shop</span>
                <LinkDisplay links={this.state.links}/>
            </div>
        );
    }
}

export default Header;