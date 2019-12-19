import React from 'react';

import store from '../../store'
import LinkDisplay from "../LinkDisplay/LinkDisplay.js";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='navBar' style={{backgroundColor: "#dadfea"}}>
                <span className='title'>STORE</span>
                <LinkDisplay links={store.getState().links}/>
            </div>
        );
    }
}

export default Header;