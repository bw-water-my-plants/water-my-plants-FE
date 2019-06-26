import axios from 'axios';

export default function() {
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token') || '',
        },
    });
}