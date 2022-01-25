import { GET_POSTS, ADD_POST } from "../actions/post";

const initialState = {};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state];
        default:
            return state;
    }
};

export default PostReducer;