import { ADD_USER } from "../actions/user";

const initialState = {};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [action.payload, ...state];
        default:
            return state;
    }
};

export default UserReducer;

