import React from 'react';

import Header from './components/Header/Header.js';
import {Provider} from "react-redux";
import store from './store';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Footer from "./components/Footer/Footer.js";

class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    getRoutes() {
        let links = store.getState().links;
        return links.map((link, idx) => (
            <Route path={link.destination} component={link.component} key={idx}/>
        ));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        {this.getRoutes()}
                        <Route path="/" component={Footer} key={-1}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

//TODO: test links to make sure that they work

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;
