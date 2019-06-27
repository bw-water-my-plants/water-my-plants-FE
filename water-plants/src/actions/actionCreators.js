import * as types from './actionTypes';
import axiosWithAuth from '../axios/axiosWithAuth';
import axios from 'axios';

const baseURL = 'https://water-my-plants-api.herokuapp.com/api';

const CreateAPIUrl = extension => {
    return `${baseURL}/${extension}`;
};

export const setPlants = plants => {
    return {
        type: types.SET_PLANTS,
        payload: plants
    };
};

export const setProfile = profile => {
    return {
        type: types.SET_PROFILE,
        payload: profile
    };
};

export const setError = err => {
    return {
        type: types.API_ERROR,
        payload: err
    };
};

export const fetchPlants = () => dispatch => {
    dispatch({ type: types.FETCHING_PLANTS });
    return axiosWithAuth()
        .get(CreateAPIUrl('plants'))
        .then(res => {
            dispatch(setPlants(res.data));
            dispatch({ type: types.FETCH_SUCCESS });
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
};

export const deletePlant = (id) => dispatch => {
    return axiosWithAuth()
        .delete(CreateAPIUrl(`plants/${id}`))
        .then(res => {
            dispatch({ type: types.POST_SUCCESS });
            dispatch(fetchPlants());
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
}

export const addPlant = data => dispatch => {
    return axiosWithAuth()
        .post(CreateAPIUrl('plants'), data)
        .then(res => {
            dispatch({ type: types.POST_SUCCESS });
            dispatch(fetchPlants());
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
};

export const updatePlant = (id, data) => dispatch => {
    return axiosWithAuth()
        .put(CreateAPIUrl(`plants/${id}`), data)
        .then(res => {
            dispatch({ type: types.POST_SUCCESS });
            dispatch(fetchPlants());
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
};

export const login = (email, password) => dispatch => {
    dispatch({ type: types.LOGGING_IN });
    return axios
        .post(CreateAPIUrl('auth/login'), { email, password })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: types.LOGIN_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.LOGIN_FAIL });
        });
};

export const register = ({ email, username, password, phone_number }) => dispatch => {
    return axios
    .post(CreateAPIUrl('auth/register'), { email, password, username, phone_number })
    .then(res => {
        dispatch({ type: types.POST_SUCCESS });
    })
    .catch(error => {
        dispatch(setError(error.message));
    });
}


export const addDay = () => {
    return {
        type: types.PLANT_ADD_DAY,
    }
}

export const minusDay = () => {
    return {
        type: types.PLANT_MINUS_DAY,
    }
}

export const nextPicture = () => {
    return {
        type: types.PLANT_NEXT_PICTURE,
    }
}

export const prevPicture = () => {
    return {
        type: types.PLANT_PREV_PICTURE,
    }
}

export const setCurrentPlant = (plant) => {
    return {
        type: types.PLANT_SET_PLANT,
        payload: plant,
    }
}

export const toggleForm = () => {
    return {
        type: types.MENU_FORM_TOGGLE,
    }
}

export const waterPlant = (id) => dispatch => {
    dispatch(updatePlant(id, {
        last_watered_at: (new Date()).toISOString(),
    }))
}

export const fetchProfile = () => dispatch => {
    dispatch({ type: types.FETCHING_PLANTS });
    return axiosWithAuth()
        .get(CreateAPIUrl('profile'))
        .then(res => {
            dispatch(setProfile(res.data));
            dispatch({ type: types.FETCH_SUCCESS });
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
};

export const updateProfile = data => dispatch => {
    return axiosWithAuth()
        .put(CreateAPIUrl(`profile`), data)
        .then(res => {
            dispatch({ type: types.POST_SUCCESS });
            dispatch(fetchProfile());
        })
        .catch(error => {
            dispatch(setError(error.message));
        });
};
