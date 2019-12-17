import React from 'react';

import Header from './components/Header';
import {Provider} from "react-redux";
import store from './store';

class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
    render() {
        return (
            <div className="App">
                <Header/>
            </div>
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
