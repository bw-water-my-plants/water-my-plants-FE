import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const plantState = {
    plants: null,
}

const apiState = {
    fetching: false,
    posting: false,
    loggingIn: false,
    loginFail: '',
}

export function plantsReducer(state = plantState, action) {
    switch(action.type) {
        case(types.SET_PLANTS):
            return { ...state, plants: action.payload };
        default:
            return state;
    }
}