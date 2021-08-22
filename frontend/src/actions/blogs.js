import axios from 'axios';
import {
    GET_BLOGS,
    ADD_BLOG,
    GET_BLOG

} from '../types/blogTypes';
import {
    newslettersURL

} from '../constants';
import { returnErrors } from './messages';


export const getBlogs = () => dispatch => {

    axios.get(newslettersURL)
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
      }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addBlog = (blog) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      };
    axios.post(newslettersURL, blog, headers)
        .then(res => {
            dispatch({
                type: ADD_BLOG,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//get
export const getBlog = id => dispatch =>{
      axios.get(`${newslettersURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_BLOG,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
