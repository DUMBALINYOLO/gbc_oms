import {
    GET_BLOGS,
    GET_BLOG,
    ADD_BLOG
    } from '../types/blogTypes';

const initialState = {
    blogs: [],
    blog: {},

}


export default function blogs(state = initialState, action){
    switch(action.type){

        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };

        case ADD_BLOG:
            return {
                ...state,
                blog: [...state.blogs, action.payload]
            };
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload
            };

        default:
            return state;
    }
}
