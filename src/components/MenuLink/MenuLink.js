import React from 'react';

import './MenuLink.css';

class MenuLink extends React.Component{
    render(){
        return (<div className='link'>{this.props.content}</div>);
    }
}

export default MenuLink;
