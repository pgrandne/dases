import axios from 'axios';
import { URL_USER } from '../api'

export const GET_USER  = "GET_USER";

export const getUser = () => {
    return (dispatch) => {
        return axios.get(URL_USER)
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data})
        })
        .catch((err) => console.log(err));
    };
};