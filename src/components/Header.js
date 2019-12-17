import React from 'react';

import store from '../store'

import LinkDisplay from "./LinkDisplay";

class Header extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#dadfea"}}>
                <span>TITLE</span>
                <LinkDisplay links={store.getState().links}/>
            </div>
        );
    }
}

export default Header;