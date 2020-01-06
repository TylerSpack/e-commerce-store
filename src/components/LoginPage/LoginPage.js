import React from 'react';

import store from '../../store';

class LoginPage extends React.Component {
    state = {
        fields: {
            username: '',
            password: ''
        },
        errors: ""
    };
    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
    };

    validateUser(user) {
        for (const validUser of store.getState().validUsers) {
            if (
                validUser.username === user.username &&
                validUser.password === user.password
            ) {
                return true;
            }
        }
        return false;
    }

    onFormSubmit = evt => {
        evt.preventDefault();
        if (this.validateUser({
            username: this.state.fields.username,
            password: this.state.fields.password
        })) {
            this.setState({errors: ''});
            store.dispatch({
                type: "LOGIN_USER",
                user: {
                    username: this.state.fields.username,
                    password: this.state.fields.password,
                    img: store.getState().validUsers.find(
                        u => u.username === this.state.fields.username).img
                }
            });
            this.props.history.push("/products");
        } else {
            this.setState({errors: 'invalid username or password'});
        }
    };

    render() {
        return (
            <div>
                <span>Login</span>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='username'
                        name='username'
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder='password'
                        name='password'
                        value={this.state.fields.password}
                        onChange={this.onInputChange}
                    />
                    <span className='error'>{this.state.errors}</span>
                    <input type='submit'/>
                </form>

            </div>
        );
    }
}

export default LoginPage;