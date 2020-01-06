import React from 'react';

import "./ProfilePage.css";
import store from "../../store"
import {Redirect} from "react-router-dom";

class ProfilePage extends React.Component {


    render() {
        let user = store.getState().user;
        return (
            <div>
                {!user.username ? (<Redirect to="/login"/>) : (
                    <div className="profile">
                        <img src={user.img} alt="profilePic" className="profileImage"/>
                        <span className="username">{user.username}</span>
                    </div>)}
            </div>
        );


    }
}

export default ProfilePage;