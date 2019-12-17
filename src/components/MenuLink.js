import React from 'react';

import store from '../store'

class MenuLink extends React.Component{
    render(){
        return (<div>{this.props.content}</div>);
    }
}

export default MenuLink;

// onClick={() => {store.dispatch(
//     {
//         type:"SWITCH_PAGE", pageTitle: this.props.pageTitle
//     })}}