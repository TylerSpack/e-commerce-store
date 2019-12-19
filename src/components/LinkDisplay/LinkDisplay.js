import React from 'react';
import {Link} from "react-router-dom";

import MenuLink from '../MenuLink/MenuLink.js';
import './LinkDisplay.css';

class LinkDisplay extends React.Component {
    renderLinks() {
        return this.props.links.map((link, idx) => (
            <Link to={link.destination} key={idx} className='routerLink'>
                <MenuLink content={link.content} pageTitle={link.pageTitle}/>
            </Link>
        ));
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