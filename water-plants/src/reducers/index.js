import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

const plantState = {
    plants: []
};

const profileState = {
    profile: {}
};

const apiState = {
    fetching: false,
    posting: false,
    loggingIn: false,
    loginFail: null,
    error: null,
    loggedIn: false,
}

const formState = {
    freq: 2,
    picture: 1,
    currentPlant: null,
}

const menuState = {
    formShow: false,
}
export default combineReducers({
    plants: plantsReducer,
    api: apiReducer,
    form: formReducer,
    menus:menuReducer,
    profile: profileReducer
});

export function plantsReducer(state = plantState, action) {
    switch (action.type) {
        case types.SET_PLANTS:
            return { ...state, plants: action.payload };
        default:
            return state;
    }
}
export function formReducer(state = formState, action) {
    switch(action.type) {
        case(types.PLANT_ADD_DAY):
            return { ...state, freq: state.freq + 1};
        case(types.PLANT_MINUS_DAY):
            return { ...state, freq: state.freq - 1};
        case(types.PLANT_NEXT_PICTURE):
            return { ...state, picture: state.picture + 1};
        case(types.PLANT_PREV_PICTURE):
            return { ...state, picture: state.picture - 1};
        case(types.PLANT_SET_PLANT):
            if(action.payload !== null){
                return { ...state, currentPlant: action.payload, freq: parseInt(action.payload.watering_frequency), picture: parseInt(action.payload.img_id)};
            } else {
                return { ...state, currentPlant: null };
            }
        default:
            return state;
    }
}

export function menuReducer(state = menuState, action) {
    switch(action.type) {
        case(types.MENU_FORM_TOGGLE):
            return { ...state, formShow: !state.formShow };
        default:
            return state;
    }
}

export function profileReducer(state = profileState, action) {
    switch (action.type) {
        case types.SET_PROFILE:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
}

export function apiReducer(state = apiState, action) {
    switch (action.type) {
        case types.FETCHING_PLANTS:
            return { ...state, fetching: true };
        case types.FETCH_SUCCESS:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case types.API_ERROR:
            return {
                ...state,
                fetching: false,
                posting: false,
                error: action.payload
            };
        case types.POST_SUCCESS:
            return {
                ...state,
                posting: false,
                error: null
            };
        case types.LOGGING_IN:
            return {
                ...state,
                loggedIn: false,
                loggingIn: true,
                loginFail: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                loginFail: false
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                loginFail: true
            };
        default:
            return state;
    }
}
