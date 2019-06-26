import axios from "axios";

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('https://water-my-plants-api.herokuapp.com/api/auth/register', userData )
    }
}