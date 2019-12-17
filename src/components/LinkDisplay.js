import React from 'react';
import {
BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

import MenuLink from './MenuLink'

import Footer from './Footer'

// import store from "../store"

class LinkDisplay extends React.Component {
    // state = {
    //     links: store.getState().links
    // };
    renderLinks() {
        // console.log("links", this.props.links);
        return this.props.links.map((link, idx) => (
            <Link to={link.destination}>
                <MenuLink content={link.content} pageTitle={link.pageTitle} key={idx}/>
            </Link>
        ));
    }
    getRoutes(){
        return this.props.links.map((link, idx) => (
            <Route path={link.destination} component={link.component} key={idx}/>
        ));
    }
    render() {
        return (
            <Router>
                <div>
                    {this.renderLinks()}
                </div>
                <Switch>
                    {this.getRoutes()}
                    <Route path="/" component={Footer} key={-1}/>
                </Switch>
            </Router>

        );
    }
}

export default LinkDisplay;