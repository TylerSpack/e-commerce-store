import ProfilePage from "../components/ProfilePage/ProfilePage";

export default function userReducer(state = {}, action) {
    switch(action.type){
        case "LOGIN_USER":
            return  action.user;
        default:
            return state;
    }
}