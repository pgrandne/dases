import axios from 'axios';
import { URL_POSTS } from '../api'


export const GET_POSTS  = "GET_POSTS";
export const ADD_POST = 'ADD_POST'

export const getPosts = () => {
    return (dispatch) => {
        return axios.get(URL_POSTS)
        .then((res) => {
            dispatch({ type: GET_POSTS, payload: res.data})
        })
        .catch((err) => console.log(err));
    };
};

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post(URL_POSTS, data)
        .then((res) => {
            dispatch({ type: ADD_POST, payload: data})
        })
        .catch((err) => console.log(err));
    };
};