import axios from 'axios';
import { URL_USER } from '../api'

export const ADD_USER  = "ADD_USER";

export const addUser = (data) => {
    return (dispatch) => {
        return axios.post(URL_USER, data)
        .then((res) => {
            dispatch({ type: ADD_USER, payload: data})
        })
        .catch((err) => console.log(err));
    };
};
