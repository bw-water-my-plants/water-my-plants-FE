import * as types from './actionTypes';
const baseURL = 'https://water-my-plants-api.herokuapp.com/api/';

const CreateAPIUrl = (extension) => {
    return `${baseURL}/${extension}`;    
}

export const setPlants = (plants) => {
    return {
        types: types.SET_PLANTS,
        payload: plants,
    };
}

export const setError = (err) => {
    return {
        type: types.API_ERROR,
        payload: err,
    }
}

export const fetchPlants = () => dispatch => {

}